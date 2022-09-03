import type { ScriptableContext } from 'chart.js';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
    tooltip: {
      enabled: false,
    },
  },
};

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export const data = {
  labels,
  datasets: [
    {
      // label: 'Dataset 1',
      fill: 'start',
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const { ctx } = context.chart;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(136, 106, 181,0.2)');
        gradient.addColorStop(1, 'rgba(136, 106, 181,0.8)');
        return gradient;
      },
      borderColor: '#886ab5',
      data: [2, 5, 3, 7, 9, 3, 4, 6, 8, 3],
      elements: {
        line: {
          tension: 0.35,
        },
      },
    },
  ],
};

const LiveFeedChart = () => {
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default LiveFeedChart;
