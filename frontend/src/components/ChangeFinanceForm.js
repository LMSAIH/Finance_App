import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getFinancesData } from "../redux/HomeSelector";
import { updateFinanceTC } from "../redux/finance-reducer";
import { useAuthContext } from "../hooks/useAuthContext";

export const ChangeFinanceForm = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useAuthContext();

  const { id } = useParams();

  const initialData = useSelector(getFinancesData).find((e) => e._id == id);

  console.log(initialData);

  const updateFinance = (
    concept,
    income,
    month,
    year,
    outcomeAmount,
    token,
    id
  ) => {
    dispatch(
      updateFinanceTC(concept, income, month, year, outcomeAmount, token, id)
    );
  };

  const submit = (values) => {
    updateFinance(
      values.concept,
      values.income,
      values.month,
      values.year,
      values.outcome,
      user.token,
      id
    );
    navigate("/");
  };

  return (
    <div className="changeFinance">
      <Formik
        enableReinitialize
        initialValues={{
          concept: initialData.outcome[0].concept,
          income: initialData.income,
          month: initialData.month,
          year: initialData.year,
          outcome: initialData.outcome[0].amount,
        }}
        onSubmit={submit}
      >
        <Form>
          <label>Year</label>

          <Field type="number" name="year" placeholder />

          <label>Month</label>

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
          <label>Enter amount of income</label>
          <Field type="number" name="income" />
          <label>Enter the concept</label>
          <Field type="text" name="concept" />
          <label>Enter amount of outcome</label>
          <Field type="number" name="outcome" />
          <button type="submit" className = "submitBtn">change finance</button>
        </Form>
      </Formik>
    </div>
  );
};
