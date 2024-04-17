import React from 'react';
import { Pie } from 'react-chartjs-2';

// Define a type for a single prediction
type Prediction = {
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
  class: string;
  class_id: number;
  detection_id: string;
};

// Define a type for the entire predictions object (myobject.predictions)
type PredictionsData = Prediction[];

type Props = {
  predictions: PredictionsData;
};

const PieChartWithPredictions: React.FC<Props> = ({ predictions }) => {
  return (
    <div className='flex flex-row'>
      {predictions.map(prediction => (
        <div key={prediction.detection_id} style={{ marginRight: '20px' }}>
          <h2>Pie Chart - Confidence: {Math.round(prediction.confidence * 100)}%</h2>
          <Pie
            data={{
              labels: ['Confidence', 'Other'],
              datasets: [
                {
                  label: 'Confidence',
                  data: [Math.round(prediction.confidence * 100), 100 - Math.round(prediction.confidence * 100)],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                  ],
                  borderWidth: 1,
                }
              ]
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PieChartWithPredictions;
