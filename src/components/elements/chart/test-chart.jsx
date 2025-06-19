import { Chart, defaults, scales } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import dataGuest from '../../../data/data-conversion.json';

defaults.plugins.legend.display = false;

const data = {
  labels: dataGuest.map((data) => data.label),
  datasets: [
    {
      label: ' ',
      data: dataGuest.map((data) => data.value),
      fill: true,
      borderWidth: 4,
      borderColor: '#2953f6',
      tension: 0.4,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
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
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  backgroundColor: (context) => {
    const bgColor = ['#84CAFF', '#fff'];
    if (!context.chart.chartArea) {
      return;
    }
    const {
      ctx,
      chartArea: { top, bottom },
    } = context.chart;
    const bgGradient = ctx.createLinearGradient(0, top, 0, bottom);
    bgGradient.addColorStop(0, bgColor[0]);
    bgGradient.addColorStop(1, bgColor[1]);
    return bgGradient;
  },
};

const config = {
  type: 'line',
  data: data,
  options: options,
};

const myChart = new Chart(document.getElementById('chart'), config);

const TestChart = () => {
  return (
    <div className="flex flex-grow relative w-full h-72">
      <canvas id="chart"></canvas>
    </div>
  );
};

export default TestChart;
