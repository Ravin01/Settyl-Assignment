import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { backendUrl } from "../../../config";

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  };

export default function PieChart() {
  const [data, setData] = useState({
    labels: ["ECE", "EEE", "CSE", "Civil"],
    datasets: [
      {
        label: "Present",
        data: [0, 0, 0, 0, 0],
        backgroundColor: [
          "#4e73df",
          "#1cc88a",
          "#36b9cc",
          "#7FB3D5",
        ],
        borderWidth: 3,
      },
    ],
  });
  useEffect(() => {
    const getPresentCounts = async () => {
      try {
        const response = await axios.get(`${backendUrl}`);
        const presentCounts = {
          ECE: 0,
          EEE: 0,
          CSE: 0,
          Civil: 0
        };
        response.data.forEach((student) => {
          presentCounts[student.department]++;
        });
        const newData = {
          ...data,
          datasets: [
            {
              ...data.datasets[0],
              data: Object.values(presentCounts),
            },
          ],
        };
        setData(newData);
      } catch (error) {
        console.error("Error fetching present counts:", error);
      }
    };

    getPresentCounts();
  }, []);
  return <Doughnut options={options} data={data}  />;
}
