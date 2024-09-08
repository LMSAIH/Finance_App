import PieChart from "../Graphs/PieGraph"

export const OverallFinanceInfo = (props) => {
    
    return (<div className = "thisMonth">
        <div className = "thisMonthInfo">
        <h4>This month's summary: </h4>
        <p>Total income: {props.totalIncome}</p>
        <p>Total expenses: {props.totalOutcome}</p>
        </div>
        <PieChart income = {props.totalIncome} outcome = {[{concept: "Overall", amount: props.totalOutcome}]}/>
    </div>)
}