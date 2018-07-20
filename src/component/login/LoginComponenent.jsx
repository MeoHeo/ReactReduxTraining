import React, { Component } from 'react';
import Modal from 'react-modal';
import { changeLoginStatus, changeUserInfo, checkUserInfo } from "../../actions/actions";
import { connect } from "react-redux";
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

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: true,
            remember: false,
            erroEmail: '',
            erroPass: ''
        }
    }
    componentWillMount() {
        if (localStorage.getItem('email')) {
            let user = { email: localStorage.getItem('email'), pass: localStorage.getItem('pass') };
            this.props.changeUserInfo(user)
            this.setState({ remember: true })
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
    signIn = (e) => {
        e.preventDefault();
        if (this.props.user.email !== '' && this.props.user.pass !== '') {
            if (localStorage.getItem('email')) {
                if(this.props.user.email !== localStorage.getItem('email')){
                    localStorage.clear();
                }
            }
            this.setLocalStorage('email', this.props.user.email);
            this.setLocalStorage('pass', this.props.user.pass);
            this.props.history.push('/home');
            this.props.changeLoginStatus(true);
            this.setLocalStorage('isLogin', true);
        } else {
            this.erroEmail(this.props.user.email);
            this.erroPass(this.props.user.pass);
        }
        // this.props.checkUserInfo(this.props.user);
    }
    setLocalStorage = (key, value) => {
        localStorage.setItem(key, value);
    }
    erroEmail = (value) => {
        if (value === '') {
            this.setState({
                erroEmail: 'This field is requied'
            })
        } else {
            this.setState({
                erroEmail: ''
            })
        }
    }
    erroPass = (value) => {
        if (value === '') {
            this.setState({
                erroPass: 'This field is requied'
            })
        } else {
            this.setState({
                erroPass: ''
            })
        }
    }
    changeEmail = (e) => {
        let user = { ...this.props.user, email: e.target.value }
        this.props.changeUserInfo(user)
        this.erroEmail(e.target.value);
    }
    changePass = (e) => {
        let user = { ...this.props.user, pass: e.target.value }
        this.props.changeUserInfo(user)
        this.erroPass(e.target.value);

    }
    rememberUser = () => {
        this.setState({
            remember: true
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
                                    <img src="https://image4.owler.com/logo/terralogic_owler_20170814_141309_original.jpg" alt="logo" />
                                </div>
                                <div className="form-group">
                                    <i className="fa fa-user"></i>
                                    <input type="email" className="form-control" id="email" onChange={this.changeEmail} value={this.props.user.email} />
                                </div>
                                <div className="erro">{this.state.erroEmail}</div>
                                <div className="form-group">
                                    <i className="fa fa-lock"></i>
                                    <input type="password" className="form-control" id="pwd" onChange={this.changePass} value={this.props.user.pass} />
                                </div>
                                <div className="erro">{this.state.erroPass}</div>
                                {/* <div className="form-check">
                                    <input type="checkbox" className="form-check-input" checked={this.state.remember} id="remember" onChange={this.rememberUser} />
                                    <label className="form-check-label" htmlFor="remember">Remember me on this computer</label>
                                </div> */}
                                <div style={{ marginLeft: '15%' }}>
                                    <button className="btn btn-primary" onClick={this.signIn}>
                                        {/* <Link to="/home" style={{color:'white'}}>SIGN IN */}
                                        {/* </Link> */}
                                        SIGN IN
                                    <i className="fa fa-sign-in" style={{ marginLeft: '5px' }}></i>
                                    </button>
                                    {/* <div className="LoginComponent-body-resetPass"><a href="https://intranet.terralogic.com/" target="blank">Forgot Your Password ?</a></div> */}
                                </div>
                            </form>
                        </div>
                    </div>


                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isLogin: state.reducers.isLogin,
        user: state.reducers.user
    }
}
export default connect(
    mapStateToProps,
    {
        changeLoginStatus: changeLoginStatus,
        changeUserInfo: changeUserInfo,
        checkUserInfo: checkUserInfo
    }
)((LoginComponent));
