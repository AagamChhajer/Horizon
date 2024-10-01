
// // "use client";
// // import React, { useEffect, useState } from 'react';
// // import dynamic from 'next/dynamic';

// // // Dynamically import Plotly to avoid SSR issues
// // const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

// // export default function PlotPage() {
// //   const [plotData, setPlotData] = useState<any | null>(null);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);
// //   const [selectedCity, setSelectedCity] = useState('kolkata');

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:3009/${selectedCity}_data`);
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! status: ${response.status}`);
// //         }
// //         const data = await response.json();
// //         if (data.plot) {
// //           setPlotData(JSON.parse(data.plot));
// //         } else {
// //           throw new Error('No plot data received');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching plot data:', error);
// //         setError('Failed to load plot data. Please try again later.');
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [selectedCity]);

// //   const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
// //     setSelectedCity(event.target.value);
// //   };

// //   if (isLoading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div>
// //       <h1>City Data Plots</h1>
// //       <label htmlFor="city-select">Select a city:</label>
// //       <select id="city-select" value={selectedCity} onChange={handleCityChange}>
// //         <option value="kolkata">Kolkata</option>
// //         <option value="delhi">Delhi</option>
// //         <option value="pune">Pune</option>
// //       </select>
// //       {plotData ? (
// //         <Plot
// //           data={plotData.data}
// //           layout={plotData.layout}
// //           config={{ responsive: true }}
// //           style={{ width: "100%", height: "600px" }}
// //         />
// //       ) : (
// //         <div>No plot data available</div>
// //       )}
// //     </div>
// //   );
// // }
// "use client";
// import React, { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';

// // Dynamically import Plotly to avoid SSR issues
// const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

// export default function PlotPage() {
//   const [plotData, setPlotData] = useState<any | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedCity, setSelectedCity] = useState('kolkata');
//   const [drugSalesData, setDrugSalesData] = useState<any | null>(null);
//   const [isDrugSalesLoading, setIsDrugSalesLoading] = useState(true);
//   const [drugSalesError, setDrugSalesError] = useState<string | null>(null);
//   const [selectedDrugSalesOption, setSelectedDrugSalesOption] = useState('1');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:3009/${selectedCity}_data`);
//         if (!response.ok) {
//           throw new Error(`HTTP error status: ${response.status}`);
//         }
//         const data = await response.json();
//         if (data.plot) {
//           setPlotData(JSON.parse(data.plot));
//         } else {
//           throw new Error('No plot data received');
//         }
//       } catch (error) {
//         console.error('Error fetching plot data:', error);
//         setError('Failed to load plot data. Please try again later.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [selectedCity]);

//   useEffect(() => {
//     const fetchDrugSalesData = async () => {
//       setIsDrugSalesLoading(true);
//       try {
//         const response = await fetch(`http://localhost:3011/${selectedDrugSalesOption}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error status: ${response.status}`);
//         }
//         const data = await response.json();
//         if (data.plot) {
//           setDrugSalesData(JSON.parse(data.plot));
//         } else {
//           throw new Error('No drug sales data received');
//         }
//       } catch (error) {
//         console.error('Error fetching drug sales data:', error);
//         setDrugSalesError('Failed to load drug sales data. Please try again later.');
//       } finally {
//         setIsDrugSalesLoading(false);
//       }
//     };

//     fetchDrugSalesData();
//   }, [selectedDrugSalesOption]);

//   const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCity(event.target.value);
//   };

//   const handleDrugSalesOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedDrugSalesOption(event.target.value);
//   };

//   if (isLoading || isDrugSalesLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error || drugSalesError) {
//     return (
//       <div>
//         {error ? <p>Error: {error}</p> : null}
//         {drugSalesError ? <p>Error: {drugSalesError}</p> : null}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>City Data Plots</h1>
//       <label htmlFor="city-select">Select a city: </label>
//       <select id="city-select" value={selectedCity} onChange={handleCityChange}>
//         <option value="kolkata">Kolkata</option>
//         <option value="delhi">Delhi</option>
//         <option value="pune">Pune</option>
//       </select>
//       {plotData ? (
//         <Plot
//           data={plotData.data}
//           layout={plotData.layout}
//           config={{ responsive: true }}
//           style={{ width: "100%", height: "600px" }}
//         />
//       ) : (
//         <div>No plot data available</div>
//       )}

//       <h2>Drug Sales Data Plot</h2>
//       <label htmlFor="drug-sales-select">Select drug sales option: </label>
//       <select id="drug-sales-select" value={selectedDrugSalesOption} onChange={handleDrugSalesOptionChange}>
//         <option value="1">Kolkata</option>
//         <option value="2">Delhi</option>
//         <option value="3">Pune</option>
//       </select>
//       {drugSalesData ? (
//         <Plot
//           data={drugSalesData.data}
//           layout={drugSalesData.layout}
//           config={{ responsive: true }}
//           style={{ width: "100%", height: "600px" }}
//         />
//       ) : (
//         <div>No drug sales data available</div>
//       )}
//     </div>
//   );
// }
"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Plotly to avoid SSR issues
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

export default function PlotPage() {
  const [plotData, setPlotData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState('kolkata');
  const [drugSalesData, setDrugSalesData] = useState<any | null>(null);
  const [isDrugSalesLoading, setIsDrugSalesLoading] = useState(true);
  const [drugSalesError, setDrugSalesError] = useState<string | null>(null);
  const [selectedDrugSalesOption, setSelectedDrugSalesOption] = useState('1');
  const [correlation, setCorrelation] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3009/${selectedCity}_data`);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        if (data.plot) {
          setPlotData(JSON.parse(data.plot));
        } else {
          throw new Error('No plot data received');
        }
      } catch (error) {
        console.error('Error fetching plot data:', error);
        setError('Failed to load plot data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCity]);

  useEffect(() => {
    const fetchDrugSalesData = async () => {
      setIsDrugSalesLoading(true);
      try {
        const response = await fetch(`http://localhost:3011/${selectedDrugSalesOption}`);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        if (data.plot) {
          setDrugSalesData(JSON.parse(data.plot));
        } else {
          throw new Error('No drug sales data received');
        }
      } catch (error) {
        console.error('Error fetching drug sales data:', error);
        setDrugSalesError('Failed to load drug sales data. Please try again later.');
      } finally {
        setIsDrugSalesLoading(false);
      }
    };

    fetchDrugSalesData();
  }, [selectedDrugSalesOption]);

  useEffect(() => {
    if (plotData && drugSalesData) {
      const correlationValue = calculateCorrelation(
        plotData.data[0].y,
        drugSalesData.data[0].y
      );
      setCorrelation(correlationValue);
    }
  }, [plotData, drugSalesData]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const handleDrugSalesOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDrugSalesOption(event.target.value);
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

  if (isLoading || isDrugSalesLoading) {
    return <div>Loading...</div>;
  }

  if (error || drugSalesError) {
    return (
      <div>
        {error ? <p>Error: {error}</p> : null}
        {drugSalesError ? <p>Error: {drugSalesError}</p> : null}
      </div>
    );
  }

  return (
    <div>
      <h1>City Data Plots</h1>
      <label htmlFor="city-select">Select a city: </label>
      <select id="city-select" value={selectedCity} onChange={handleCityChange}>
        <option value="kolkata">Kolkata</option>
        <option value="delhi">Delhi</option>
        <option value="pune">Pune</option>
      </select>
      {plotData ? (
        <Plot
          data={plotData.data}
          layout={plotData.layout}
          config={{ responsive: true }}
          style={{ width: "100%", height: "600px" }}
        />
      ) : (
        <div>No plot data available</div>
      )}

      <h2>Drug Sales Data Plot</h2>
      <label htmlFor="drug-sales-select">Select drug sales option: </label>
      <select id="drug-sales-select" value={selectedDrugSalesOption} onChange={handleDrugSalesOptionChange}>
        <option value="1">Kolkata</option>
        <option value="2">Delhi</option>
        <option value="3">Pune</option>
      </select>
      {drugSalesData ? (
        <Plot
          data={drugSalesData.data}
          layout={drugSalesData.layout}
          config={{ responsive: true }}
          style={{ width: "100%", height: "600px" }}
        />
      ) : (
        <div>No drug sales data available</div>
      )}

      {correlation !== null && (
        <div>
          <h3>Correlation</h3>
          <p>Correlation between the two datasets: {correlation.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}