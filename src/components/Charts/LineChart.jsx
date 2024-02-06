
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "Jan",
  "",
  "Mar",
  "",
  "May",
  "",
  "Jul",
  "",
  "sep",
  "",
  "Nov",
  "",
];

export const data = {
  labels,
  datasets: [
    {
        fill: true,
      label: "Dataset 2",
      data: [
        3500, 3550, 3535, 3600, 3570, 3590, 3520, 3585, 3520, 3569, 3496, 3576,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "#f6f8fd",
      tension: 0.3,
    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}