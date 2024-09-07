import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

export const CreateNewFinanceForm = (props) => {


    //component is not finished, try to do not pay much attention about this

    let submit = (values) => {
        const token = props.token;
        console.log(props.token);
        props.createNewFinance(values.year, values.month, values.income, values.concept, values.amount, token);
    }

    // const createOutcomesForm = () => {
    //     let elements = [];
    //     for (let i = 0; i < amountEdditing; i++) {
    //         elements.push(<OutcomesForm setOutcomes={setOutcomes} />)
    //     }
    //     return elements;
    // }
    //not finished
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ concept: "", amount: 0, month: "January", year: 2024, edditingAmount: 0 }}
                onSubmit={submit}>
                <Form>
                    <div>
                        Year:
                    </div>
                    <Field type="number" name="year" placeholder />
                    <div>
                        Month:
                    </div>
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
                    <div>
                        Income in this period:
                    </div>
                    <Field type="number" name="income" />
                    {/* <div>
                        How much items you want to add:
                    </div>
                    <AmountOutcomesEdditingForm setOutcomesAmount={setOutcomesAmount} /> */}

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
