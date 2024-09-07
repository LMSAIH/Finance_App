import React, { useEffect, useState } from 'react';
import PieGraph from '../Graphs/PieGraph';
import { useNavigate } from 'react-router-dom';

export const FinanceInfo = (props) => {

    const navigate = useNavigate();

    const deleteFinance = () => {
        props.deleteFinance(props.financeData._id, props.token)
    }

    let [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        const newTotalAmount = props.financeData.outcome.reduce((sum, e) => sum + e.amount, 0);
        setTotalAmount(newTotalAmount);
    }, [props.financeData.outcome]);

    return (
        <div className='FinanceInfo'>
            <div>Year: {props.financeData.year}</div>
            <div>Month: {props.financeData.month}</div>
            <div>Income: {props.financeData.income}</div>
            <div>
                Outcome: {props.financeData.outcome.map(e => {
                    return (<div>
                        <div>{e.concept}: {e.amount}</div>
                        <PieGraph income={props.financeData.income} outcome={[{
                            concept: e.concept,
                            amount: totalAmount
                        }]} />
                    </div>
                    )
                })}
            </div>
            <div>
                <button onClick={deleteFinance}>Delete finance</button>
                <button onClick={() => {navigate(`/change/${props.financeData._id}`)}}>Change finance</button>
            </div>
        </div>
    )
}




