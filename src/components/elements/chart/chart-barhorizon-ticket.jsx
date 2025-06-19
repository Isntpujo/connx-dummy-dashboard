import { Chart, defaults, scales } from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';

import dataGuest from '../../../data/data-ticket.json';

defaults.plugins.legend.display = false;

const data = {
  labels: dataGuest.map((data) => data.label),
  datasets: [
    {
      // label: ' ',
      // data: [...dataGuest.map((data) => data.value), 10000],
      data: dataGuest.map((data) => data.value),
      backgroundColor: ['#CECECE', '#2953F6', '#FECC81', '#FF5FA2'],
      borderRadius: 6,
      barThickness: 24,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  indexAxis: 'y',
  plugins: {
    legend: {
      display: false,
    },
  },
};

const ChartBarTicket = () => {
  return (
    <div className="relative w-[99%] h-72">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartBarTicket;
