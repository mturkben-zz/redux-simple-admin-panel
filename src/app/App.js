import {useState} from "react";


import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";

import Header from "./components/Header";

const App = () =>  {

    const [target,setTarget] = useState("");

    return(
        <>
            <Header/>
            <div className="contianer-fluid p-0 m-0 mt-5">
            <div className="row d-flex justify-content-around align-items-start">
                <div className="col-12 col-lg-2 shadow-sm rounded-lg p-0 m-0 m-2">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link text-body" href="#users" onClick={() => setTarget("users")}>Users</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-body" href="#posts" onClick={() => setTarget("posts")}>Posts</a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-8 shadow-sm rounded-lg p-0 m-0 m-2">
                    {
                        target === "" ? null :
                            target === "users" ? 
                            <Users/> : <Posts/>
                    }
                </div>
            </div>
            </div>
        </>
    );
}
export default App;