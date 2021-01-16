import {useState,useEffect} from "react";
import {connect} from "react-redux";

import {fetchData} from "../../../api/database";
import {set_show} from "../../actions/fun-action";

import Modals from "./components/Modals";


const Posts = (props) => {

    const [postsData,setPostData] = useState({});

    useEffect(() => {
        props.onFetchData("posts");
    },[])

    const getData = data => {
        setPostData(data)
        props.onShow(true);
    }
    return(
        <table className="table table-striped p-0 m-0">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">body</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                        props.datas.data.posts ? 
                        props.datas.data.posts.map((data) => {
                            return(
                                <tr key={data.id}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.title}</td>
                                    <td>{data.body}</td>
                                    <td><button className="btn btn-outline-danger" onClick={() =>{getData(data)}}>EDİT</button> </td>
                                </tr>
                            );
                        }) : <tr><th>NO DATA</th></tr> 
                }
            </tbody>
            {
                props.fun.show ? <Modals data={postsData}/> : null
            }
        </table>
    );
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    onFetchData:fetchData,
    onShow:set_show
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);