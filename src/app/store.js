import {createStore ,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import funReducer from "./reducers/funReducers";


const rootReducer = combineReducers({
    datas:userReducer,
    fun:funReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));


export default store;