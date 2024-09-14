import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = ({ incomes, outcomes, months }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const filteredIncomes = [];
    const filteredOutcomes = [];
    const filteredPoints = [];

    function findPlace(location, dataRetrieval) {
      let counter = 0;
      for (let i = 0; i < labels.length; i++) {
        if (months[counter] !== labels[i]) {
          location.push(0);
        } else {
          location.push(dataRetrieval[counter]);
          counter++;
        }
      }
    }

    function populatePoints() {
      let currentPoint = 0;

      for (let i = 0; i < filteredIncomes.length; i++) {
        currentPoint += filteredIncomes[i] - filteredOutcomes[i];
        filteredPoints.push(currentPoint);
      }
    }

    findPlace(filteredIncomes, incomes);
    findPlace(filteredOutcomes, outcomes);
    console.log(filteredIncomes);
    console.log(filteredOutcomes);
    populatePoints();

    // Set the data based on newly calculated filteredPoints
    setData({
      labels: labels,
      datasets: [
        {
          label: "Expected savings",
          data: filteredPoints,
          borderColor: "rgb(255,192,192)",
        },
      ],
    });
  }, [incomes, months]);

  const options = {};

  return (
    <div className="LineGraph">
      {data ? <Line options={options} data={data} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default LineGraph;
