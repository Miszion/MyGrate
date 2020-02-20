import React from "react";
import Icon from './mygrate-icon2.svg';
import Person from './person.svg';
import {Link} from 'react-router-dom';
export default class NavBar extends React.Component {


    render() {

        return (
            <div className="navbar" style={{backgroundColor: this.props.color}}>
                <ul className="navlist">
                <li>
                    <Link to="/" className="title-text"> 
                    <img src={Icon} alt="house-icon" id="house-icon"></img>
                    {this.props.text} 
                    </Link>
                </li>
                <li><Link to="/userpage">Dashboard</Link></li>
                    <li>
                    <div className="dropdown">
                        <button className="dropbtn">Events</button>
                        <div className="dropdown-content">
                            <a href="#">Create An Event</a>
                            <Link to="/events">Find Events</Link>
                            <a href="#">Saved Events</a>
                        </div>
                    </div>

                    </li>
                    <li>Friends</li>
                    <li>About</li>
                    <li> 
                        <img src={Person} alt="person icon" id="person-image"></img>
                    </li>
                    </ul>
            </div>
        );



    }


}