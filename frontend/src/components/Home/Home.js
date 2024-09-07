import React, { useEffect, useState, version } from 'react';
import el from './Home.module.css'
import { getFinancesData } from '../../redux/HomeSelector';
import { useDispatch, useSelector } from 'react-redux';
import { getFinancesTC, createNewFinanceTC } from '../../redux/finance-reducer';
import { deleteFinanceTC } from '../../redux/finance-reducer';
import { FinanceInfo } from './FinanceInfo';
import { CreateNewFinanceForm } from '../../forms/CreateNewFinanceForm';
import { SelectIFilterForm } from '../../forms/SelectFilterForm';
import { useAuthContext } from '../../hooks/useAuthContext';
import { OverallFinanceInfo } from './OverallFinanceInfo';

//Not finished components:
// import { AmountOutcomesEdditingForm } from './AmountOutcomesEdditingForm';
// import { OutcomesForm } from './OutcomesForm';


export const Home = () => {

    const [isEdditting1, setIsEdditing1] = useState(false);
    const [filter, setFilter] = useState({ month: "january", year: 2024 });
    const [finData, setFinData] = useState(null);
    const [totalOutcome, setTotalOutcome] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);

    const dispatch = useDispatch();
    
    let financesData = useSelector(getFinancesData);


    const {user} = useAuthContext();

    const token = user.token;

    const getFinances = (token) => {
    
        dispatch(getFinancesTC(token))
    }

    const createNewFinance = (year, month, income, concept, amount, token) => {
        dispatch(createNewFinanceTC(year, month, income, concept, amount, token))
    }

    const deleteFinance = (id, token) => {
        dispatch(deleteFinanceTC(id, token));
    }

    
    useEffect(() => {
        getFinances(token);
    }, [dispatch]);

    useEffect(() => {
        let newFinanceData;
        let finalOutcome = 0;
        let finalIncome = 0;
        if (financesData.length > 0) {
            newFinanceData = (financesData.filter(e => {
                if (e.month === filter.month && e.year === filter.year)
                {
                    let tempOutcome = 0;
                    finalIncome += e.income;
                    e.outcome.forEach(outcome => {
                        tempOutcome += outcome.amount;
                    });;
                    finalOutcome += tempOutcome;
                    return true;
                }
                    
            }))
        }
        setTotalIncome(finalIncome);
        setTotalOutcome(finalOutcome);
        setFinData(newFinanceData);
        if (newFinanceData) {
            if (newFinanceData.length == 0) {
                setFinData(null);
            }
        }
        
    }, [financesData, filter]);



    const createNewIncome = () => {
        setIsEdditing1(true);
    }

    const disableNewIncome = () => {
        setIsEdditing1(false)
    }


    return (
        <div>
            <div className={el.User}>
                <img src="https://i.pinimg.com/736x/2d/6a/c8/2d6ac85d121247db3822c81f42a4a27d--avatar-naruto-series.jpg" alt="Photo here" />
                {user ? user.email : "not logged in"}
            </div>
            <OverallFinanceInfo totalOutcome = {totalOutcome} totalIncome = {totalIncome}/>
            <div>
                Graphs shit {version}
            </div>
            <hr></hr>
            <div>
                <div>
                    <SelectIFilterForm setFilter={setFilter} />
                </div>
                {(finData) ? (finData.map(e => <FinanceInfo financeData={e} deleteFinance={deleteFinance} token={token} />)) : (
                    <div>Loading...</div>
                )}
                <div>
                    <div>
                        Deleting finance
                    </div>
                </div>
                Forms for creating new incomes or wastings
                <div>
                    <div>
                        {isEdditting1 ? <div>
                            <CreateNewFinanceForm createNewFinance={createNewFinance} token={token} />
                            <button onClick={disableNewIncome}>Stop creating an new finance object for a month and a year</button>
                        </div> : <button onClick={createNewIncome}>Create finance object for a month and a year</button>}
                    </div>
                </div>
            </div>
        </div>


    )
}












