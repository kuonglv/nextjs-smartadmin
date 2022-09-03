import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
  },
};

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export const data = {
  labels,
  datasets: [
    {
      // label: 'Dataset 1',
      data: [2, 5, 3, 7, 9, 1, 4, 6, 8, 3],
      backgroundColor: '#886ab5',
    },
  ],
};

const AnalyticBarChart = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="h-full items-stretch justify-center">
        <div className="text-[10px] uppercase text-gray-700">Expense</div>
        <div className="font-semibold text-purple-600">$47,000</div>
      </div>
      <div className="h-8 w-24 items-center justify-center">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default AnalyticBarChart;
