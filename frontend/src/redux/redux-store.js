import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import {thunk} from 'redux-thunk';
import { financeReducer } from './finance-reducer';
import { authReducer } from "./auth-reducer";

let reducers = combineReducers({
    //all reducers there
    financesPage: financeReducer,
    auth: authReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))