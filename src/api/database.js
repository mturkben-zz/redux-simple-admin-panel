import {fetchedData} from "../app/actions/actions";

//Data Base
const defaultState = {
    data:[]
}
export default defaultState;



const fetchData = type => {
    return dispatch => {
        fetch(`http://localhost:5050/${type}`,{
            method: "GET",
            headers: {
                "accept":"application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => dispatch(fetchedData(res,type)))
        .catch(err => console.log(err))
    }
}

const updateData = (point,type) => {
        fetch(`http://localhost:5050/${point}/${type.id}`,{
            method: "PUT",
            headers: {
                "accept":"application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(type)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
} 

const deleteData = (point,type) => {
    fetch(`http://localhost:5050/${point}/${type}`,{
        method: "DELETE",
        headers: {
            "accept":"application/json",
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
} 
export {fetchData,updateData,deleteData}