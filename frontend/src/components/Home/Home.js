import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import el from './Home.module.css'
import { getFinancesData } from '../../redux/HomeSelector';
import { useDispatch, useSelector } from 'react-redux';
import { getFinancesTC, createNewFinanceTC } from '../../redux/finance-reducer';
import { deleteFinanceTC } from '../../redux/finance-reducer';


export const Home = () => {

    const [isEdditting1, setIsEdditing1] = useState(false);
    const [filter, setFilter] = useState({ month: "january", year: 2024 });
    const [finData, setFinData] = useState(null);

    const dispatch = useDispatch();
    
    const userId = useSelector(state => state.auth.userId)

    const getFinances = (id) => {
        dispatch(getFinancesTC(id))
    }

    const createNewFinance = (year, month, userId, income, concept, amount) => {
        dispatch(createNewFinanceTC(year, month, userId, income, concept, amount))
    }

    const deleteFinance = (id) => {
        dispatch(deleteFinanceTC(id));
    }

    let financesData = useSelector(getFinancesData);

    useEffect(() => {
        getFinances('66d3f72ba56830513652570f');

    }, [dispatch]);

    useEffect(() => {
        debugger
        if (financesData.length > 0) {
            setFinData(financesData.find(e => {
                console.log(e.month)
                if (e.month === filter.month && e.year === filter.year)
                    return true
            }))
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
                userName
            </div>
            <div>
                Graphs shit
            </div>
            <hr></hr>
            <div>
                <div>
                    <SelectIFilterForm setFilter={setFilter}  />
                </div>
                {finData ? (
                    <>
                        <div>Year: {finData.year}</div>
                        <div>Month: {finData.month}</div>
                        <div>Income: {finData.income}</div>
                        <div>
                            Outcome: {finData.outcome.map(e => {
                                return (<div>
                                    <div>{e.concept}: {e.amount}</div>
                                </div>

                                )
                            })}
                        </div>
                    </>
                ) : (
                    <div>Loading...</div>
                )}
                <div>
                    <div>
                        Deleting finance
                    </div>
                    <div>
                        <DeleteForm deleteFinance={deleteFinance} financesData={financesData}/>
                    </div>

                </div>
                Forms for creating new incomes or wastings
                <div>
                    <div>
                        {isEdditting1 ? <div>
                            <FinanceForm createNewFinance={createNewFinance} userId={userId}/>
                            <button onClick={disableNewIncome}>Stop creating an new finance object for a month and a year</button>
                        </div> : <button onClick={createNewIncome}>Create finance object for a month and a year</button>}
                    </div>
                </div>
            </div>
        </div>


    )
}




const FinanceForm = (props) => {

    let submit = (values) => {
        props.createNewFinance(values.year, values.month, props.userId ,values.income, values.concept, values.amount);
    }

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ concept: "", amount: 0, month: "January", year: 2024 }}
                onSubmit={submit}>
                <Form>
                    <Field type="number" name="year" />
                    <Field as="select" name="month">
                        <option value={"january"}>january</option>
                        <option value={"February"}>February</option>
                        <option value={"March"}>March</option>
                        <option value={"April"}>April</option>
                        <option value={"May"}>May</option>
                        <option value={"June"}>June</option>
                        <option value={"July"}>July</option>
                        <option value={"August"}>August</option>
                        <option value={"September"}>September</option>
                        <option value={"October"}>October</option>
                        <option value={"November"}>November</option>
                        <option value={"December"}>December</option>
                    </Field>
                    <Field type="number" name="income" />
                    <Field type="text" name="concept" />
                    <Field type="number" name="amount" />
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};


const SelectIFilterForm = (props) => {
    let submit = (values) => {
        props.setFilter({ month: values.month, year: values.year });
    }
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ month: "January" }}
                onSubmit={submit}>

                <Form>
                    <Field as="select" name="month">
                        <option value={"January"}>January</option>
                        <option value={"February"}>February</option>
                        <option value={"March"}>March</option>
                        <option value={"April"}>April</option>
                        <option value={"May"}>May</option>
                        <option value={"June"}>June</option>
                        <option value={"July"}>July</option>
                        <option value={"August"}>August</option>
                        <option value={"September"}>September</option>
                        <option value={"October"}>October</option>
                        <option value={"November"}>November</option>
                        <option value={"December"}>December</option>
                    </Field>
                    <Field type="number" name="year" />
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};



const DeleteForm = (props) => {
    let submit = (values) => {
        const foundFinance = props.financesData.find(e => e.month == values.month && e.year == values.year);
        props.deleteFinance(foundFinance._id);
    }
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ month: "January", year: 2024 }}
                onSubmit={submit}>

                <Form>
                    <Field type="number" name="year" />
                    <Field as="select" name="month">
                        <option value={"january"}>january</option>
                        <option value={"February"}>February</option>
                        <option value={"March"}>March</option>
                        <option value={"April"}>April</option>
                        <option value={"May"}>May</option>
                        <option value={"June"}>June</option>
                        <option value={"July"}>July</option>
                        <option value={"August"}>August</option>
                        <option value={"September"}>September</option>
                        <option value={"October"}>October</option>
                        <option value={"November"}>November</option>
                        <option value={"December"}>December</option>
                    </Field>
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};