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

    outcome.forEach((out) => {
      concepts.push(out.concept);
      amounts.push(out.amount);
      backgroundColors.push("rgb(255,0,0)");
    });

    setOutcomeConcepts(concepts);
    setOutcomeAmounts(amounts);
    setBackgroundColors(backgroundColors);

    // Calculate spending and savings
    const spending = amounts.reduce((sum, amount) => sum + amount, 0);
    console.log(spending);
    setTotalSpending(spending);
    setToSave(income - spending);
    console.log("Tosave: ", income-spending );
  }, [income, outcome]);

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
      <Pie options={options} data={pieChartData} />
    </div>
  );
};

export default PieChart;
