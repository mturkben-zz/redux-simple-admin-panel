import defaultState from "../../api/database";

import {FETCHED_DATA,UPDATE_DATA,DELETE_DATA} from "../actions/actions";

import {updateData,deleteData} from "../../api/database";

const userReducer = (state = defaultState, {type,payload}) => {
    switch (type) {
        case FETCHED_DATA:
            return {
                ...state,
                data: payload
            }
        case UPDATE_DATA:
            updateData(payload.point,payload.data)
            return{
                ...state,
                data: state.data[payload.point].filter(target => target.id === payload.data.id ? payload.data : target)
            }
        case DELETE_DATA:
            deleteData(payload.point,payload.data)
            return {
                ...state,
                data: state.data[payload.point].filter(target => target.id !== payload.data.id ? state.data[payload.point] : console.log("DEL: ",payload.data.id))
            }
        default: return state
    }
}

export default userReducer;