const FETCHED_DATA = "FETCHED_DATA";
const UPDATE_DATA = "UPDATE_DATA";
const DELETE_DATA = "DELETE_DATA";

export {FETCHED_DATA,UPDATE_DATA,DELETE_DATA}

const fetchedData = (res,type) => {
    return {
        type: FETCHED_DATA,
        payload: type === "users" ? {users:res} : {posts:res}
    }
}

const updateData = (point,data) => {
    return{
        type:UPDATE_DATA,
        payload:{point,data}
    }
}

const deleteData = (point,data) => {
    return {
        type:DELETE_DATA,
        payload: {point,data}
    }
}
export {fetchedData,updateData,deleteData}