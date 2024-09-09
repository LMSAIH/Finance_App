import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

export const CreateNewFinanceForm = (props) => {


    //component is not finished, try to do not pay much attention about this

    let submit = (values) => {
        const token = props.token;
        console.log(values);
        props.createNewFinance(values.year, values.month, values.income, values.outcomes, token);
    }

    let initialValues = {
        outcomes: [{
            concept: "",
            amount: 0,
        }],
        month: "January",
        year: 2024,
        edditingAmount: 0
    }
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={submit}>

                {({ errors, touched, values }) => (
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

                        <FieldArray name="outcomes" render={
                            ({ insert, remove }) => {
                                return (
                                    <div>
                                        {values.outcomes.map((outcome, index) => {
                                            return (
                                                <div>
                                                    <Field type="text" name={`outcomes.${index}.concept`}
                                                        id={`outcomes.${index}.concept`} />
                                                    <Field type="number" name={`outcomes.${index}.amount`}
                                                        id={`outcomes.${index}.concept`} />
                                                    <button type='button' onClick={(e) => {
                                                        remove(index)
                                                    }}>Delete form</button>
                                                </div>
                                            )
                                        })}
                                        <button type='button' onClick={(e) => {
                                            insert(values.outcomes.length + 1, {
                                                concept: "",
                                                amount: 0,
                                            })
                                        }}>Add an outcome</button>

                                    </div>
                                )
                            }
                        } />


                        <button type="submit">
                            Submit
                        </button>
                    </Form>
                )}

            </Formik>
        </div>
    );
};
