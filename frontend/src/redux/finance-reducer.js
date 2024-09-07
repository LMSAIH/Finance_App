import axios from "axios";
import { FinancesAPI } from "../components/routers/base-router";

const InitialState = {
    financesData: [{
        _id: "66d3860e3f28a618e2220f3d",
        month: "January",
        year: 2024,
        income: 12321,
        outcome: [
            {
                concept: "Bils",
                amount: 500,
                _id: "66d387e0255bcef860ecb321"
            }
        ],
        createdAt: "2024-08-31T21:07:26.815Z",
        updatedAt: "2024-08-31T21:15:12.666Z",
        
    }],
    goals: [{
        _id: "66d3860e3f28a618e2220f3d",
        month: "January",
        amount: 10,
        completed: 1,
    }],
    totalOutcome: 0,
    totalIncome: 0
};


const GET_FINANCES = "SET_FINANCES";
const CREATE_FINANCE = "CREATE_FINANCE"
const ADD_TOTAL_OUTCOMES = "ADD_TOTAL_OUTCOMES"

export let financeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case GET_FINANCES: {
            return {
                ...state,
                financesData: [...action.financesData]
            }
        };
        case CREATE_FINANCE: {
            return {
                ...state,
                financesData: [...state.financesData, action.financesData]
            }
        }
        case ADD_TOTAL_OUTCOMES: {
            return {
                ...state,
                totalOutcome: state.totalOutcome + action.outcome
            }
        };

        default: {
            return state;
        } 
        
    }
}

const getFinancesAC = (financesData) => {
    return {
        type: "SET_FINANCES",
        financesData: financesData,
    }
}


const createIncomeAC = (financesData) => {
    return {
        type: "CREATE_FINANCE",
        financesData
    }
}

const addTotalOutcomes = (outcomes) => {
    return {
        type: "SET_TOTAL_OUTCOMES",
        outcomes
    }
}

export const getFinancesTC = (token) => async (dispatch) => {
      const response = await FinancesAPI.getFinances(token);
      console.log(response);
      console.log("^^^^^^^^");
      dispatch(getFinancesAC(response))
} 

export const createNewFinanceTC = (year, month, income, concept, amount, token) => async (dispatch) => {
    const response = await FinancesAPI.createNewFinance(year, month, income, concept, amount, token);
    dispatch(createIncomeAC(response));
}

export const deleteFinanceTC = (id, token) => async (dispatch) => {
    const response = await FinancesAPI.deleteFinance(id, token)
    if (response.message == "data succesfully deleted") {
        dispatch(getFinancesTC(token))
    } else {
        console.log("Something went wrong")
    }
}

export const updateFinanceTC = (concept, income,
    month, year, outcomeAmount, token, id) => async (dispatch) => {
        console.log("WOOOOOW" + outcomeAmount)
        const response = await FinancesAPI.updateFinance(concept, income,
            month, year, outcomeAmount, token, id);
        dispatch(getFinancesTC(token));

}