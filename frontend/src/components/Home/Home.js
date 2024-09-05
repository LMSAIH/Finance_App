import React, { useEffect, useState } from 'react';
import el from './Home.module.css'
import { getFinancesData } from '../../redux/HomeSelector';
import { useDispatch, useSelector } from 'react-redux';
import { getFinancesTC, createNewFinanceTC } from '../../redux/finance-reducer';
import { deleteFinanceTC } from '../../redux/finance-reducer';
import { FinanceInfo } from './FinanceInfo';
import { CreateNewFinanceForm } from '../../forms/CreateNewFinanceForm';
import { SelectIFilterForm } from '../../forms/SelectFilterForm';
import { useAuthContext } from '../../hooks/useAuthContext';

//Not finished components:
// import { AmountOutcomesEdditingForm } from './AmountOutcomesEdditingForm';
// import { OutcomesForm } from './OutcomesForm';

export const Home = () => {

    const [isEdditting1, setIsEdditing1] = useState(false);
    const [filter, setFilter] = useState({ month: "january", year: 2024 });
    const [finData, setFinData] = useState(null);
    const dispatch = useDispatch();

    const userId = useSelector(state => state.auth.userId)

    const {user} = useAuthContext();

    const getFinances = (userId) => {
        dispatch(getFinancesTC(userId))
    }

    const createNewFinance = (year, month, userId, income, concept, amount) => {
        dispatch(createNewFinanceTC(year, month, userId, income, concept, amount))
    }

    const deleteFinance = (id, userId) => {
        dispatch(deleteFinanceTC(id, userId));
    }

    let financesData = useSelector(getFinancesData);

    useEffect(() => {
        debugger
        getFinances(userId);

    }, [dispatch]);

    useEffect(() => {
        debugger
        console.log(financesData);
        let newFinanceData;
        if (financesData.length > 0) {
            newFinanceData = (financesData.filter(e => {
                console.log(e.month)
                if (e.month === filter.month && e.year === filter.year)
                    return true
            }))
        }
        console.log("here2: ");
        setFinData(newFinanceData);
        console.log(finData);
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
            <div>
                Graphs shit
            </div>
            <hr></hr>
            <div>
                <div>
                    <SelectIFilterForm setFilter={setFilter} />
                </div>
                {(finData) ? (finData.map(e => <FinanceInfo financeData={e} deleteFinance={deleteFinance} />)) : (
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
                            <CreateNewFinanceForm createNewFinance={createNewFinance} userId={userId} />
                            <button onClick={disableNewIncome}>Stop creating an new finance object for a month and a year</button>
                        </div> : <button onClick={createNewIncome}>Create finance object for a month and a year</button>}
                    </div>
                </div>
            </div>
        </div>


    )
}












