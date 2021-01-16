import {useState} from "react";
import {connect} from  "react-redux";
import {Modal} from "react-bootstrap";

import {set_show} from "../../../actions/fun-action";

import {updateData} from "../../../actions/actions";

const Modals = props => {
    const [show, setShow] = useState(true);
    const [textValue,setTextValue] = useState({
        username:"",
        name:"",
        phone:"",
        website:"",
        email:""
    });

    const hideShow = () => {
        setShow(false);
        props.onShow(false);
    }

    const onChangeCheck = (e) => {
        let e_name = e.target.name,
            e_val  = e.target.value;

        setTextValue({
            username:e_name === "username" ? e_val : textValue.username,
            name:e_name === "name" ? e_val : textValue.name,
            phone:e_name === "phone" ? e_val : textValue.phone,
            website:e_name === "website" ? e_val : textValue.website,
            email:e_name === "email" ? e_val : textValue.email,
        });
    }
    const sendData = e => {
        e.preventDefault();

        const sendValue = {
            id:props.data.id,
            username:"",
            name:"",
            phone:"",
            website:"",
            email:""
        }

        for(const variable in textValue) {
            sendValue[variable] = textValue[variable] === "" ? props.data[variable] : textValue[variable]
        }
        props.onUpdateData("users",sendValue);

        window.location.reload()
    }
    return(
        <>
            <Modal size="lg" show={show} onHide={() => hideShow()}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color:"#404044"}}>{props.data.name} <span className="text-secondary shadow-sm">|</span> {props.data.username} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <form className="form-group">
                            <div className="row">
                                <div className="col-6 my-1">
                                    <label>Username</label>
                                    <input name="username" onChange={(e) => onChangeCheck(e)} value={textValue.username} className="form-control" type="text" placeholder={props.data.username}/>
                                </div>
                                <div className="col-6 my-1">
                                    <label>Name</label>
                                    <input name="name" onChange={(e) => onChangeCheck(e)} value={textValue.name} className="form-control" type="text" placeholder={props.data.name}/>
                                </div>
                                <div className="col-12 my-1">
                                    <label>Phone Number</label>
                                    <input name="phone" onChange={(e) => onChangeCheck(e)} value={textValue.phone} className="form-control" type="text" placeholder={props.data.phone}/>
                                </div>
                                <div className="col-12 my-1">
                                    <label>Website</label>
                                    <input name="website" onChange={(e) => onChangeCheck(e)} value={textValue.website} className="form-control" type="text" placeholder={props.data.website}/>
                                </div>
                                <div className="col-12 my-1">
                                    <label>Email</label>
                                    <input name="email" onChange={(e) => onChangeCheck(e)} value={textValue.email} className="form-control" type="text" placeholder={props.data.email}/>
                                </div>
                                <div className="col-12 my-1">
                                    <input onClick={(e) => sendData(e)} type="submit" value="EDİTLE" className="btn btn-block btn-outline-primary"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = {
    onUpdateData:updateData,
    onShow: set_show
}

export default connect(mapStateToProps,mapDispatchToProps)(Modals);