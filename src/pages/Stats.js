import React from 'react';
import { Bar } from 'react-chartjs-2';
import PieChart from '../components/PieChart';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const caseData = [
  { studentName: 'Alice', caseType: 'Anesthesia' },
  { studentName: 'Bob', caseType: 'Laryngoscopes' },
  { studentName: 'Charlie', caseType: 'Nasal ETT' },
  { studentName: 'David', caseType: 'Oral ETT' },
  { studentName: 'Eva', caseType: 'Anesthesia' },
  { studentName: 'Frank', caseType: 'Nasal ETT' },
  { studentName: 'Grace', caseType: 'Anesthesia' },
  { studentName: 'Hannah', caseType: 'Oral ETT' },
  { studentName: 'Ian', caseType: 'Laryngoscopes' },
  { studentName: 'Jack', caseType: 'Nasal ETT' },
  { studentName: 'Karen', caseType: 'Anesthesia' },
  { studentName: 'Liam', caseType: 'Oral ETT' },
  { studentName: 'Mona', caseType: 'Laryngoscopes' },
  { studentName: 'Nina', caseType: 'Nasal ETT' },
  { studentName: 'Oscar', caseType: 'Anesthesia' },
  { studentName: 'Paul', caseType: 'Laryngoscopes' },
  { studentName: 'Quincy', caseType: 'Oral ETT' },
  { studentName: 'Rachel', caseType: 'Nasal ETT' },
  { studentName: 'Sam', caseType: 'Anesthesia' },
  { studentName: 'Tina', caseType: 'Laryngoscopes' },
];


const data = [
  { studentName: 'Alice', casesReported: 5 },
  { studentName: 'Bob', casesReported: 2 },
  { studentName: 'Charlie', casesReported: 7 },
  { studentName: 'David', casesReported: 4 },
  { studentName: 'Eva', casesReported: 3 },
  { studentName: 'Frank', casesReported: 6 },
  { studentName: 'Grace', casesReported: 8 },
  { studentName: 'Hannah', casesReported: 1 },
  { studentName: 'Ian', casesReported: 3 },
  { studentName: 'Jack', casesReported: 5 },
  { studentName: 'Kara', casesReported: 6 },
  { studentName: 'Leo', casesReported: 4 },
  { studentName: 'Mona', casesReported: 7 },
  { studentName: 'Nate', casesReported: 2 },
  { studentName: 'Olivia', casesReported: 8 },
  { studentName: 'Paul', casesReported: 3 },
  { studentName: 'Quincy', casesReported: 5 },
  { studentName: 'Rachel', casesReported: 4 },
  { studentName: 'Sam', casesReported: 9 },
];


const Stats = () => {
  // Prepare data for the chart
  const chartData = {
    labels: data.map((student) => student.studentName),
    datasets: [
      {
        label: 'Cases Reported',
        data: data.map((student) => student.casesReported),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options for customization
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Cases Reported by Students',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Student Names',
          font: {
            size: 14,
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cases Reported',
          font: {
            size: 14,
          },
        },
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="w-full flex flex-wrap justify-center items-center mx-auto p-4">
      <div className="w-1/2"><Bar data={chartData} options={options}/></div>
      <div className="w-1/2"><PieChart data={caseData}/></div>
    </div>
  );
};

export default Stats;
