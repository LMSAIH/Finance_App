import { FinancesAPI } from "../components/routers/base-router"


const InitialState = {
    userId: "12321312",
    email: "max@gmail.com",
    login: "Max",
    isAuth: true
}

export const authReducer = (state = InitialState, action) => {
    switch (action.state) {
         default: {
            return state
        }
    }
}

const setAuthUser = (userId, email, login, isAuth) => {
    return {
        userId,
        email,
        login,
        isAuth,
    }
}

export const loginTC = (login, password, rememberMe) => async (dispatch) => {
    const response = await FinancesAPI.loginNewUser(login, password, rememberMe);
    if (response.status == 200) {
        dispatch(setAuthUser(response.id, response.email, response.login, true));
    } else dispatch(setAuthUser(null, null, null, false))
}