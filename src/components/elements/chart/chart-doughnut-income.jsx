import { Chart, defaults } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

import dataGuest from '../../../data/data-income.json';

defaults.plugins.legend.display = false;

const data = {
  labels: dataGuest.map((data) => data.label),
  datasets: [
    {
      label: ' ',
      data: dataGuest.map((data) => data.value),
      backgroundColor: ['#CECECE', '#2953F6', '#FECC81', '#FF5FA2'],
      borderWidth: 5,
      borderRadius: 6,
      cutout: 105,
      hoverBorderColor: '#fff',
    },
  ],
};

const ChartDoughnutIncome = () => {
  return <Doughnut data={data} />;
};

export default ChartDoughnutIncome;