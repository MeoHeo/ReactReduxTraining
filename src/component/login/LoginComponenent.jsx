import React, { Component } from 'react';
import Modal from 'react-modal';
import './login.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement(document.getElementById('root'));

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div className="LoginComponent">
                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}
                >
                    <div>
                        <div className="LoginComponent-header">
                            <h4 className="LoginComponent-header-tilte">
                                <span>
                                    <strong><i className="fa fa-lock"></i> Login to Intranet DASHBOARD</strong>
                                </span>
                            </h4>
                        </div>
                        <div className="LoginComponent-body">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <img src="https://image4.owler.com/logo/terralogic_owler_20170814_141309_original.jpg" />
                                </div>
                                <div className="form-group">
                                    <i className="fa fa-user"></i>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group">
                                    <i className="fa fa-lock"></i>
                                    <input type="password" className="form-control" id="pwd" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me on this computer</label>
                                </div>
                                <div style={{marginLeft:'15%'}}>
                                    <button type="submit" className="btn btn-primary">SIGN IN
                                    <i className="fa fa-sign-in" style={{marginLeft:'5px'}}></i>
                                    </button>
                                    <div className="LoginComponent-body-resetPass">Forgot Your Password ?</div>
                                </div>
                            </form>
                        </div>
                    </div>


                </Modal>
            </div>
        );
    }
}
