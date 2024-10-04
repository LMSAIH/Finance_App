import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { useEffect, useState } from "react";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Filler);

const options = {
  plugins: {
    legends: {
      position: "top",
    },
    legend: {
      labels: {
        color: "rgb(255,255,255)",
      },
    },
  },
  scales: {
    r: {
      ticks: {
        backdropColor: "#303036", // Change the background color of the numbers
        color: "rgba(0,0,0,0)", // Change the color of the numbers
      },
      grid: {
        display: false,
      },
    },
  },
};

const LandingPageGraph = () => {
  const [chartData, setChartData] = useState(null);
  const [investments, setInvestments] = useState(10);
  const [savings, setSavings] = useState(12);
  const [fourk, setFourk] = useState(15);
  const [crypto, setCrypto] = useState(8);
  const [features, setFeatures] = useState(20);

  useEffect(() => {
    // Sample data for the landing page
    setChartData({
      labels: ["Investments", "Savings", "401K", "Crypto", "Features"],
      datasets: [
        {
          label: "My finances",
          data: [investments, savings, fourk, crypto, features],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [investments, savings, fourk, crypto, features]);

  return (
    <div className="PolarArea">
      <div className="chart">
        <h3>
          {" "}
          You are the driver, <span className="wheel">take the wheel</span>
        </h3>
        {chartData ? (
          <PolarArea options={options} data={chartData} />
        ) : (
          "loading..."
        )}
      </div>

      <div className="inputs">
        <div className="investmentsBox">
          <input
            id="myRange"
            className="investments"
            value={investments}
            max="50"
            min="0"
            type="range"
            onChange={(e) => {
              setInvestments(e.target.value);
            }}
          />
        </div>
        <div className="savingsBox">
          <input
            id="myRange"
            className="savings"
            value={savings}
            max="50"
            min="0"
            type="range"
            onChange={(e) => {
              setSavings(e.target.value);
            }}
          />
        </div>

        <div className="fourkBox">
          <input
            id="myRange"
            className="fourk"
            value={fourk}
            max="50"
            min="0"
            type="range"
            onChange={(e) => {
              setFourk(e.target.value);
            }}
          />
        </div>

        <div className="cryptoBox">
          <input
            id="myRange"
            className="crypto"
            value={crypto}
            max="50"
            min="0"
            type="range"
            onChange={(e) => {
              setCrypto(e.target.value);
            }}
          />
        </div>

        <div className="featuresBox">
          <input
            id="myRange"
            className="features"
            value={features}
            max="50"
            min="0"
            type="range"
            onChange={(e) => {
              setFeatures(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageGraph;
