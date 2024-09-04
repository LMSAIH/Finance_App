import React from 'react';
import { Formik, Form, Field } from 'formik';


export const OutcomesForm = (props) => {

    let submit = (values) => {
        const newOutComes = {
            concept: values.concept,
            amount: values.amount
        }
        props.setOutcomes(newOutComes);
    }

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ concept: "", amount: 0, }}
                onSubmit={submit}>
                <Form>
                    <Field type="text" name="concept" />
                    <Field type="number" name="amount" />
                </Form>
            </Formik>
        </div>
    );
};
