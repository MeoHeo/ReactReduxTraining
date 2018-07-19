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
            modalIsOpen: true,
            email:'',
            pass:'',
            erroEmail:'',
            erroPass:''
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
    signIn=(e)=>{
        e.preventDefault();
        if(this.state.email!==''&&this.state.pass!==''){
            this.props.history.push('/home')
        }else{
            this.erroEmail();
            this.erroPass();
        }
    }
    erroEmail=()=>{
        if(this.state.email===''){
            this.setState({
                erroEmail:'This field is requied'
            })
        }else{
            this.setState({
                erroEmail:''
            })
        }
    }
    erroPass=()=>{
        if(this.state.pass===''){
            this.setState({
                erroPass:'This field is requied'
            })
        }else{
            this.setState({
                erroPass:''
            })
        }
    }
    changeEmail=(e)=>{
        this.setState({
            email:e.target.value
        },function(){
            this.erroEmail();
        })
    }
    changePass=(e)=>{
        this.setState({
            pass:e.target.value
        },function(){
            this.erroPass();
        })
    }

    render() {
        return (
            <div className="LoginComponent">
                <Modal
                    isOpen={this.state.modalIsOpen}
                    // onAfterOpen={this.afterOpenModal}
                    // onRequestClose={this.closeModal}
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
                            <form className="form-horizontal" onSubmit={this.signIn}>
                                <div className="form-group">
                                    <img src="https://image4.owler.com/logo/terralogic_owler_20170814_141309_original.jpg" />
                                </div>
                                <div className="form-group">
                                    <i className="fa fa-user"></i>
                                    <input type="email" className="form-control" id="email" onChange={this.changeEmail} />
                                </div>
                                <div className="erro">{this.state.erroEmail}</div>
                                <div className="form-group">
                                    <i className="fa fa-lock"></i>
                                    <input type="password" className="form-control" id="pwd" onChange={this.changePass} />
                                </div>
                                <div className="erro">{this.state.erroPass}</div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me on this computer</label>
                                </div>
                                <div style={{marginLeft:'15%'}}>
                                    <button className="btn btn-primary" onClick={this.signIn}>
                                        {/* <Link to="/home" style={{color:'white'}}>SIGN IN */}
                                    {/* </Link> */}
                                    SING IN
                                    <i className="fa fa-sign-in" style={{marginLeft:'5px'}}></i>
                                    </button>
                                    <div className="LoginComponent-body-resetPass"><a href="https://intranet.terralogic.com/" target="blank">Forgot Your Password ?</a></div>
                                </div>
                            </form>
                        </div>
                    </div>


                </Modal>
            </div>
        );
    }
}
