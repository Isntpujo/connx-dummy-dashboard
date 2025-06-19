import { Chart, defaults, scales } from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';

import dataGuest from '../../../data/data-gender.json';

defaults.plugins.legend.display = false;

const data = {
  labels: dataGuest.map((data) => data.gender),
  datasets: [
    {
      label: ' ',
      data: dataGuest.map((data) => data.data.length),
      backgroundColor: ['#2953F6', '#FF5FA2'],
      borderRadius: 6,
      barThickness: 20,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  indexAxis: 'y',
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

console.log(data.datasets[0].data);

const ChartBarGender = () => {
  return <Bar data={data} options={options} />;
};

export default ChartBarGender;
