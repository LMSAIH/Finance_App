import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { getFinancesData } from "../redux/HomeSelector";
import { updateFinanceTC } from "../redux/finance-reducer";
import { useAuthContext } from "../hooks/useAuthContext";

export const ChangeFinanceForm = (props) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {user} = useAuthContext();

    const { id } = useParams();

    const initialData = useSelector(getFinancesData).find(e => e._id == id);

    console.log(initialData);

    const updateFinance = (concept, income,
        month, year, outcomeAmount, token, id) => {
        dispatch(updateFinanceTC(concept, income,
            month, year, outcomeAmount, token, id))
    }

    const submit = (values) => {
        updateFinance(values.concept, values.income,
            values.month, values.year, values.outcome, user.token, id);
        navigate('/');
    };

    return (<div>
         <Formik
                enableReinitialize
                initialValues={{ concept: initialData.outcome[0].concept, income: initialData.income, 
                                 month: initialData.month, year: initialData.year, outcome: initialData.outcome[0].amount}}
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
                        Enter amount of income
                    </div>
                    <Field type="number" name="income" />
                    <div>
                        Enter the concept
                    </div>
                    <Field type="text" name="concept" />
                    <div>
                        Enter amount of outcome
                    </div>
                    <Field type="number" name="outcome" />
                    <button type="submit">
                        change finance
                    </button>
                </Form>
            </Formik>
    </div>);
}

