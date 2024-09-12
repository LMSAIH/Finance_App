import React, { useEffect, useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";

export const CreateNewFinanceForm = (props) => {
  //component is not finished, try to do not pay much attention about this

  let submit = (values) => {
    const token = props.token;
    console.log(values);
    props.createNewFinance(
      values.year,
      values.month,
      values.income,
      values.outcomes,
      token
    );
  };

  let initialValues = {
    outcomes: [
      {
        concept: "",
        amount: 0,
      },
    ],
    month: "January",
    year: 2024,
    edditingAmount: 0,
  };
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={submit}
      >
        {({ errors, touched, values }) => (
          <Form>
            <div>
              <label> Year:</label>
            </div>
            <Field type="number" name="year" placeholder />
            <div>
              <label> Month:</label>
            </div>
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
            <div>
              <label> Income in this period:</label>
            </div>
            <Field type="number" name="income" placeholder="2800" />

<div>
            <label> Outcomes </label>
            </div>
            <FieldArray
              name="outcomes"
              render={({ insert, remove }) => {
                return (
                  <div>
                    {values.outcomes.map((outcome, index) => {
                      return (
                        <div className="outcomes">
                          <Field
                            type="text"
                            name={`outcomes.${index}.concept`}
                            id={`outcomes.${index}.concept`}
                            placeholder="Bills"
                          />

                          <Field
                            type="number"
                            name={`outcomes.${index}.amount`}
                            id={`outcomes.${index}.concept`}
                            placeholder="190"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              remove(index);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="trash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                          </button>
                        </div>
                      );
                    })}
                    <button className = "add"
                      type="button"
                      onClick={(e) => {
                        insert(values.outcomes.length + 1, {
                          concept: "",
                          amount: 0,
                        });
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="addOutcome"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                      </svg>
                    </button>
                  </div>
                );
              }}
            />

            <button type="submit" className = "submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
