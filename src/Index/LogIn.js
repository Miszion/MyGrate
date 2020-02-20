import React from 'react';
import backArrow from '../EventPage/backArrow.svg';
import {Link} from 'react-router-dom';
export default class LogIn extends React.Component {



    constructor(props) {
        super(props);

        this.deRender = this.deRender.bind(this);
        this.updateName = this.updateName.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.state = {
            userName: "User"
        }
    }

    updateName() {
        this.setState({
            userName: document.getElementById("user-val").value
        })
    }

    changeUserName(){
        this.props.changeUserName(this.state.userName);
    }

    deRender() {
        this.props.noFade();
    }

    render() {
       return( <div className="login-modal">
                <div className="login-box">
                    <img src={backArrow} style={{maxHeight: "60px", maxWidth : "60px", cursor: "pointer"}} alt="back arrow" onClick={this.deRender}></img>
                    <div className="login-text">Log In</div>
                    <form className="login-form">
                        <div className="text-prompt">Username</div><br></br> <input type="text" id="user-val" onChange={this.updateName} name="fname"></input>
                        <div className="text-prompt">Password</div><br></br> <input type="password" name="password"></input>
                        <Link to="/userpage" onClick={this.changeUserName} className="login-arrow">&#8594;</Link>
                    </form>
                </div>
        </div>);
    }


}