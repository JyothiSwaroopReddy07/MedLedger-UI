import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  // Aggregate data based on case type
  const caseTypeCounts = data.reduce((acc, { caseType }) => {
    acc[caseType] = (acc[caseType] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(caseTypeCounts),
    datasets: [
      {
        label: 'Number of Cases',
        data: Object.values(caseTypeCounts),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Distribution of Cases by Type',
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
