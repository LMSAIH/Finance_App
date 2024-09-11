import PieChart from "../Graphs/PieGraph"

export const OverallFinanceInfo = (props) => {
    
    return (<div className = "thisMonth">
        <div className = "thisMonthInfo">
        <h4 className="summary">This month's summary: </h4>
        <p className = "info">Total income: {props.totalIncome}</p>
        <p className = "expenses">Total expenses: {props.totalOutcome}</p>
        </div>
        <PieChart income = {props.totalIncome} outcome = {[{concept: "Overall", amount: props.totalOutcome}]}/>
    </div>)
}