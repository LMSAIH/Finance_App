import { FinancesAPI } from "../components/routers/base-router";

const InitialState = {
    financesData: {
        _id: "66d3860e3f28a618e2220f3d",
        month: "January",
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
        
    },
    goals: [{
        _id: "66d3860e3f28a618e2220f3d",
        month: "January",
        amount: 10,
        completed: 1,
    }],
};


const SET_FINANCES = "SET_FINANCES";
const CREATE_FINANCES = "CREATE_FINANCES"

export let financeReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_FINANCES: {
            return {
                ...state,
                financesData: action.financesData
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
        financesData: action.financesData,
    }
}


export const getFinancesTC = (id) => async (dispatch) => {
    const response = await FinancesAPI.getFinances(id);
    dispatch(getFinancesAC(response.data))
} 