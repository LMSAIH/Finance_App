import React from 'react';
import { Formik, Form, Field } from 'formik';


export const AmountOutcomesEdditingForm = (props) => {

    let submit = (values) => {
        props.setOutcomesAmount(values.edditingAmount);
    }

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{edditingAmount: 0 }}
                onSubmit={submit}>
                <Form>
                    <Field type="number" name="edditingAmount"/>
                    <button type="submit">
                        Enter the amount
                    </button>
                </Form>
            </Formik>
        </div>
    );
};
