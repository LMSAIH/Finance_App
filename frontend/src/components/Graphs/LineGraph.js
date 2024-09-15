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
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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

    const recommendedPoints = [];

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

    function calculateRecommended() {
      let currentPoint = 0;

      for (let i = 0; i < filteredIncomes.length; i++) {
        currentPoint += filteredIncomes[i] * 0.2;
        recommendedPoints.push(currentPoint);
      }
    }

    findPlace(filteredIncomes, incomes);
    findPlace(filteredOutcomes, outcomes);
    console.log(filteredIncomes);
    console.log(filteredOutcomes);
    calculateRecommended();
    populatePoints();

    // Set the data based on newly calculated filteredPoints
    setData({
      labels: labels,
      datasets: [
        {
          label: "Expected savings",
          data: filteredPoints,
          borderColor: "#4AC0F5",
          backgroundColor: "#4AC0F5",
          fill: {
            target: "origin", // 3. Set the fill options
            above: "rgba(74,192,245,0.6)",
          },
        },
        {
          label: "Recommended Savings",
          data: recommendedPoints,
          borderColor: "rgb(0,255,0)",
          backgroundColor: "rgb(0,255,0)",
          fill: {
            target: "origin", // 3. Set the fill options
            above: "rgba(0, 255, 0, 0.6)",
          },
        },
      ],
    });
  }, [incomes, months]);

  const options = {
    responsive: true,
    tension: 0.1,
    color: "rgb(255,255,255)",
    pointHoverBorderWidth: "6",
    pointHoverBorderColor: "origin",
    interaction: {
      mode: 'index', // Ensures that the hover effect is triggered by the x-axis
      intersect: false // This makes the line appear even if the cursor isn't directly on a data point
    },
    plugins: {
      tooltip: {
        mode: 'index', // Shows the tooltip based on the x-axis index
        intersect: false // Tooltip shows up even when not directly over a point
      }
    },
    scales: {
      x: {  // Changed from xAxes to x
        grid: { // Changed from gridLines to grid
          color: "#A29E9E"
        },
        ticks: {
          color: "rgb(255,255,255)"
        }
      },
      y: {  // Changed from yAxes to y
        grid: { // Changed from gridLines to grid
          color: "#A29E9E"
        },
        ticks:{
          color: "rgb(255,255,255)"
        }
      }
    },
  
  };

  return (
    <div className="LineGraph">
      {data ? <Line options={options} data={data} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default LineGraph;
