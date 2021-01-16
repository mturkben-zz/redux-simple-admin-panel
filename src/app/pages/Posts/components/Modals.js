import {useState} from "react";
import {connect} from  "react-redux";
import {Modal} from "react-bootstrap";

import {set_show} from "../../../actions/fun-action";

import {updateData} from "../../../actions/actions";

const Modals = props => {
    const [show, setShow] = useState(true);


    const hideShow = () => {
        setShow(false);
        props.onShow(false);
    }
    return(
        <>
            <Modal size="lg" show={show} onHide={() => hideShow()}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color:"#404044"}}>postsID :  {props.data.id} <span className="text-secondary shadow-sm">|</span> userID: {props.data.userId} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container"> 
                        <form className="form-group">
                            <div className="row">
                                <div className="col-12 my-1">
                                    <label>Title</label>
                                    <input name="username"className="form-control" type="text" placeholder={props.data.title} readOnly/>
                                </div>
                                <div className="col-12 my-1">
                                    <label>Body</label>
                                    <textarea className="form-control" rows="10" cols="50" placeholder={props.data.body} readOnly></textarea>
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