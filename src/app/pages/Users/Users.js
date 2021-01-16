import {useState,useEffect} from "react";
import {connect} from "react-redux";

import Modals from "./components/Modals";

import {fetchData} from "../../../api/database";
import {set_show} from "../../actions/fun-action";

import {deleteData} from "../../actions/actions";

const Users = (props) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        props.onFetchData("users");
    },[])
    
    const showModal = data => {
        props.onShow(true);
        setUserData(data);
    }
    const deleteUser = (e,id) => {
        e.preventDefault();
        props.onDeleteData("users",id)
    }
    return(
        <table className="table table-striped p-0 m-0">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">ACTİONS</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.datas.data.users ?
                    props.datas.data.users.map((data) => {
                        return(
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>
                                    <input type="submit" value="EDİT" className="btn btn-outline-info mx-1" onClick={() => showModal(data)}/>
                                    <input type="submit" value="DEL" className="btn btn-outline-danger mx-1" onClick={(e) => deleteUser(e,data.id)}/>
                                </td>
                            </tr>
                        );
                    })  : <tr><th>NO DATA</th></tr>
                }
            </tbody>
            {
                props.fun.show ? <Modals data={userData}/> : null
            }
        </table>
    );
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    onFetchData:fetchData,
    onDeleteData:deleteData,
    onShow:set_show
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);