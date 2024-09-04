import React from 'react';
import { Formik, Form, Field } from 'formik';

export const SelectIFilterForm = (props) => {

    let submit = (values) => {
        props.setFilter({ month: values.month, year: values.year });
    }
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ month: "january", year: 2024 }}
                onSubmit={submit}>
                <Form>
                    <Field as="select" name="month">
                        <option value={"january"}>January</option>
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