import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import el from './Home.module.css'
import { getFinancesData } from './HomeSelector';
import { useDispatch, useSelector } from 'react-redux';
import { getFinancesTC } from '../../redux/finance-reducer';


export const Home = () => {

    const financesData = useSelector(getFinancesData);
    console.log(financesData);
    const dispatch = useDispatch();

    const getFinances = () => {
        dispatch(getFinancesTC())
    }

    // getFinances(); 

    const [isEdditting1, setIsEdditing1] = useState(false);
    const [isEdditting2, setIsEdditing2] = useState(false);
    const [month, setMonth] = useState("");

    const createNewIncome = () => {
        setIsEdditing1(true);
    }

    const disableNewIncome = () => {
        setIsEdditing1(false)
    }

    const createNewOutcome = () => {
        setIsEdditing2(true);
    }

    const disableNewOutcome = () => {
        setIsEdditing2(false)
    }

    const f = async () => {
        await getFinances();
    }

    const sumbitMonth = {

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
                    Income: {financesData.income}
                </div>
                <div>
                    Month: {financesData.month}
                </div>
                <div>
                    <SelectMonthForm onSubmit = {sumbitMonth}/>
                </div>
                <div>
                    <div>
                        {financesData.map(e => {
                            return (
                                
                                <div></div>
                            )
                        })}
                    </div>
                    Outcome: {financesData.outcome.map(e => {
                        return (<div>
                            <div>{e.concept}: {e.amount}</div>
                        </div>

                        )
                    })}
                </div>
                Forms for creating new incomes or wastings
                <div>
                    <div>
                        {isEdditting1 ? <div>
                            <FinanceForm />
                            <button onClick={disableNewIncome}>Stop creating an income</button>
                        </div> : <button onClick={createNewIncome}>Create new income</button>}
                    </div>
                    <div>
                        {isEdditting2 ? <div>
                            <FinanceForm />
                            <button onClick={disableNewOutcome}>Stop creating an outcome</button>
                        </div> : <button onClick={createNewOutcome}>Create new outcome</button>}
                    </div>

                </div>
            </div>
        </div>


    )
}




const FinanceForm = (props) => {

    let submit = (values) => {

    }

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ reason: "", amount: 0 }}
                onSubmit={submit}>


                <Form>
                    <Field type="text" name="reason" />
                    <Field type="number" name="amount" />
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
                    <button type="submit">
                        Submit
                    </button>
                </Form>


            </Formik>
        </div>
    );
};


const SelectMonthForm = (props) => {
    let submit = (values) => {

    }
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ reason: "", amount: 0 }}
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
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

