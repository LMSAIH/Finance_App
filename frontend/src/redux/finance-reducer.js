import axios from "axios";
import { FinancesAPI } from "../components/routers/base-router";

const InitialState = {
    financesData: [{
        _id: "66d3860e3f28a618e2220f3d",
        month: "January",
        year: 2024,
        user_id: "12321312",
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
};


const GET_FINANCES = "SET_FINANCES";
const CREATE_FINANCE = "CREATE_FINANCE"

export let financeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case GET_FINANCES: {
            return {
                ...state,
                financesData: [...action.financesData]
            }
        };
        case CREATE_FINANCE: {
            console.log(action);
            return {
                ...state,
                financesData: [...state.financesData, action.financesData]
            }
        }
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

export const getFinancesTC = (userId, token) => async (dispatch) => {
      const response = await FinancesAPI.getFinances(token);
      
      console.log(response);
      const usersData = response.filter(e => e.user_id == userId);
      
      console.log(usersData);
      dispatch(getFinancesAC(usersData))
} 

export const createNewFinanceTC = (year, month, userId, income, concept, amount, token) => async (dispatch) => {
    debugger
    console.log(`Yur boy is here ${token}`);
    const response = await FinancesAPI.createNewFinance(year, month, userId, income, concept, amount, token);
    
    console.log(`this ${response}`);
    console.log(response);
    dispatch(createIncomeAC(response));
}

export const deleteFinanceTC = (id, userId, token) => async (dispatch) => {
    const response = await FinancesAPI.deleteFinance(id, token)
    if (response.message == "data succesfully deleted") {
        dispatch(getFinancesTC(userId, token))
    } else {
        console.log("Something went wrong")
    }
}