import React from "react";
import { Formik, Form, Field } from 'formik';

export const DeleteForm = (props) => {
    let submit = (values) => {
        const foundFinance = props.financesData.find(e => e.month == values.month && e.year == values.year);
        console.log("Watch here");
        console.log(foundFinance);
        props.deleteFinance(foundFinance._id, props.userId);
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