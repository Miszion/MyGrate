import React from 'react';
import './sign-page.css';
import '../Index/App.css';
import Fireworks from '../SignPage/fireworks.jpg';
import Confetti from '../EventPage/misc.jpg'
import NavBar from '../Index/nav-bar';
import {Link} from 'react-router-dom';
export default class SignPage extends React.Component {


    constructor(props) {
        super(props);

        this.updateName = this.updateName.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.state = {
            userName: null
        }
    }


    updateName() {
        this.setState({
            userName: document.getElementById("user-name-sign").value
        })
    }

    changeUserName() {
        this.props.changeUserName(this.state.userName);
    }


    render() {
        return(
        <div className="sign-page">
            <style>{"html {background-image: unset}"}</style>
            <NavBar text="MyGrate" color="#20232a"></NavBar>
            <div className="overlay"></div>
            <img src={Confetti} className="image-slot" alt="fireworks"></img>
            <div className="signup-text">Sign Up</div>
            <div className="middle-table">
                <div className="form-partition">
                    <div className="sign-up-form">
                        <form>
                            <div className="text-prompt">First Name</div><br></br> <input type="text" name="fname"></input>
                            <div className="text-prompt">Last Name</div><br></br> <input type="text" name="lname"></input>
                            <div className="text-prompt">Email</div><br></br> <input type="text" name="email"></input>
                            <div className="text-prompt">Password</div><br></br> <input type="password" name="password"></input>
                        </form>
                    </div>
                    <div className="ghost-form"></div>
                    <div className="sign-up-form">
                        <form>
                            <div className="text-prompt">User Name</div><br></br> <input type="text" id="user-name-sign" onChange={this.updateName} name="fname"></input>
                            <div className="text-prompt">Migrated From:</div><br></br> <input type="text" name="lname"></input>
                            <div className="text-prompt">Migrated To:</div><br></br> <input type="text" name="email"></input>
                            <div className="submit-button">
                                <Link to="/userpage" onClick={this.changeUserName} className="button-text-signup">Sign up!</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>)
    }


}