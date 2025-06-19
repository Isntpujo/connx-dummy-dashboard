import { Chart, defaults } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

import dataGuest from '../../../data/data-guest.json';

defaults.plugins.legend.display = false;

const data = {
  labels: dataGuest.map((data) => data.label),
  datasets: [
    {
      label: ' ',
      data: dataGuest.map((data) => data.value),
      backgroundColor: ['#2563eb', '#EDF5FE'],
      borderWidth: 5,
      borderRadius: 6,
      cutout: 105,
      hoverBorderColor: '#fff',
    },
  ],
};

const ChartGuest = () => {
  return <Doughnut data={data} />;
};

export default ChartGuest;
