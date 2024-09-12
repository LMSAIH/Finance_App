import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { useState, useEffect } from "react";

ChartJS.register(Tooltip, Legend, ArcElement);

const PieChart = ({ income, outcome }) => {
  const [outcomeConcepts, setOutcomeConcepts] = useState([]);
  const [outcomeAmounts, setOutcomeAmounts] = useState([]);
  const [toSave, setToSave] = useState(0);
  const [totalSpending, setTotalSpending] = useState(0);
  const [backgroundColors, setBackgroundColors] = useState([]);

  useEffect(() => {
    // Initialize the outcome arrays
    const concepts = ["To Save"];
    const amounts = [];
    //Only set the income to green
    const backgroundColors = ["rgb(0,255,0)"];

    function chooseColor() {
      let red = Math.floor(Math.random() * (255 - 100) + 100);
      let green = Math.floor(Math.random() * (255 - 100) + 100);
      let blue = Math.floor(Math.random() * (255 - 100) + 100);

      let color = `rgb(${red}, ${green}, ${blue})`;

      return color;
    }

    outcome.forEach((out) => {
      concepts.push(out.concept);
      amounts.push(out.amount);
      backgroundColors.push(chooseColor());
    });

    setOutcomeConcepts(concepts);
    setOutcomeAmounts(amounts);
    setBackgroundColors(backgroundColors);

    // Calculate spending and savings
    const spending = amounts.reduce((sum, amount) => sum + amount, 0);
    console.log(spending);
    setTotalSpending(spending);

    if (totalSpending > income) {
      setToSave(0);
    } else {
      setToSave(income - spending);
    }

    console.log("Tosave: ", income - spending);
  }, [income, outcome, totalSpending]);

  const pieChartData = {
    labels: outcomeConcepts,
    datasets: [
      {
        label: "This month",
        data: [toSave].concat(outcomeAmounts),
        backgroundColor: backgroundColors,
        borderColor: "rgb(0,0,0)",
        hoverOffset: 10,
      },
    ],
  };

  const options = {};

  return (
    <div className="PieChart">
      <h3>The income for this month: {income}</h3>
      <div className="upDown">
        {totalSpending < income && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="green"
            className="bi bi-caret-up-fill"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        )}
        {income < totalSpending && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        )}
        {Math.abs(income - totalSpending)}
      </div>
      {/* there was a delete button, but i decided to seperate functionality in wrapper component, if you have any concerns text me */}
      <Pie options={options} data={pieChartData} />
    </div>
  );
};

export default PieChart;
