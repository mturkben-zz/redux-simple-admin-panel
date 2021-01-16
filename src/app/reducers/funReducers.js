
import {SET_SHOW} from "../actions/fun-action";

const defaultFuncState = {
    show:false
}

const funReducer  = (state = defaultFuncState, {type,payload}) => {
    switch (type) {
        case SET_SHOW:
            return{
                ...state,
                show:payload
            }
        default:
            return state
    }
}

export default funReducer;