import PieChart from "../Graphs/PieGraph"

export const OverallFinanceInfo = (props) => {
    
    return (<div>
        <h4>Overall info about this period of time:</h4>
        <div>Total income: {props.totalIncome}</div>
        <div>Total outcome: {props.totalOutcome}</div>
        <PieChart income = {props.totalIncome} outcome = {[{concept: "Overall", amount: props.totalOutcome}]}/>
    </div>)
}