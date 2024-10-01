"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Plotly to avoid SSR issues
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const cities = ['kolkata', 'delhi', 'pune'];
const drugSalesOptions = ['1', '2', '3'];

export default function CorrelationPage() {
  const [correlationData, setCorrelationData] = useState<number[][]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [insights, setInsights] = useState<string>('');

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const correlationMatrix: number[][] = [];

        for (const city of cities) {
          const cityCorrelations: number[] = [];

          for (const option of drugSalesOptions) {
            const cityData = await fetchCityData(city);
            const drugSalesData = await fetchDrugSalesData(option);

            if (cityData && drugSalesData) {
              const correlation = calculateCorrelation(cityData, drugSalesData);
              cityCorrelations.push(correlation);
            } else {
              cityCorrelations.push(NaN);
            }
          }

          correlationMatrix.push(cityCorrelations);
        }

        setCorrelationData(correlationMatrix);

        // Generate insights using Ollama API, passing correlation data
        await generateInsights(correlationMatrix);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const fetchCityData = async (city: string) => {
    const response = await fetch(`http://localhost:3009/${city}_data`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return JSON.parse(data.plot).data[0].y;
  };

  const fetchDrugSalesData = async (option: string) => {
    const response = await fetch(`http://localhost:3011/${option}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return JSON.parse(data.plot).data[0].y;
  };

  const calculateCorrelation = (data1: number[], data2: number[]) => {
    const n = data1.length;
    const mean1 = data1.reduce((a, b) => a + b, 0) / n;
    const mean2 = data2.reduce((a, b) => a + b, 0) / n;

    let numerator = 0;
    let denominator1 = 0;
    let denominator2 = 0;

    for (let i = 0; i < n; i++) {
      numerator += (data1[i] - mean1) * (data2[i] - mean2);
      denominator1 += Math.pow(data1[i] - mean1, 2);
      denominator2 += Math.pow(data2[i] - mean2, 2);
    }

    const denominator = Math.sqrt(denominator1) * Math.sqrt(denominator2);
    return numerator / denominator;
  };

  const generateInsights = async (correlationMatrix: number[][]) => {
    const prompt = `Analyze these correlation coefficients between drug sales and other city data to provide valuable insights and recommendations:
  
    Kolkata Drug Sales 1: ${correlationMatrix[0][0]}
    Kolkata Drug Sales 2: ${correlationMatrix[0][1]}
    Kolkata Drug Sales 3: ${correlationMatrix[0][2]}
  
    Delhi Drug Sales 1: ${correlationMatrix[1][0]}
    Delhi Drug Sales 2: ${correlationMatrix[1][1]}
    Delhi Drug Sales 3: ${correlationMatrix[1][2]}
  
    Pune Drug Sales 1: ${correlationMatrix[2][0]}
    Pune Drug Sales 2: ${correlationMatrix[2][1]}
    Pune Drug Sales 3: ${correlationMatrix[2][2]}
  
    Provide insights into trends, potential correlations, and recommendations for each city.`;
  
    try {
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3.2',
          prompt: prompt,
          temperature: 0,
          max_tokens: 80000,
          stream: false,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      setInsights(data.response);
    } catch (error) {
      console.error('Error generating insights:', error);
      setInsights('Failed to generate insights. Please try again later.');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const heatmapData = [{
    z: correlationData,
    x: drugSalesOptions.map(option => `Drug Sales ${option}`),
    y: cities,
    type: 'heatmap',
    colorscale: 'Viridis',
  }];

  const layout = {
    title: 'Correlation Heatmap: City Data vs Drug Sales',
    xaxis: { title: 'Drug Sales Options' },
    yaxis: { title: 'Cities' },
  };

  return (
    <div>
      <h1>Correlation Heatmap</h1>
      <Plot
        data={heatmapData}
        layout={layout}
        config={{ responsive: true }}
        style={{ width: "100%", height: "600px" }}
      />
      <h2>AI-Generated Insights</h2>
      <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        {insights}
      </pre>
    </div>
  );
}