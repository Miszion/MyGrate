import React, { Component } from 'react';
import NavBar from "./nav-bar";
import './App.css';
import MainButton from './main-button';
import HomeImage from './funimage2.jpg';
import LogIn from './LogIn.js';


class HomePage extends Component {



  constructor(props) {
    super(props);

    this.fadeOverlay = this.fadeOverlay.bind(this);
    this.noFade = this.noFade.bind(this);
    this.state ={
      overlay: false
    }
  }

  noFade() {
    this.setState({
      overlay: false
    })
  }

  fadeOverlay() {
    this.setState({
      overlay: true
    });
  }


  render() {
    return (
      <div className="home-page">
        {this.state.overlay && <div className="overlay" style={{animation: "imgAppear 1s forwards", zIndex: 4, outline: "9999px solid rgba(0,0,0,0.7)"}}></div>}
        <img src={HomeImage} className="home-image" alt="girl cheering" onClick={this.noFade}></img>
        <NavBar text="MyGrate" color="#20232a"></NavBar>
        {this.state.overlay && <LogIn noFade={this.noFade} changeUserName={this.props.changeUserName}></LogIn>}
          <div className="intro-text">
            <div className={this.state.overlay ? "intro-box-fade": "intro-box"}>
              Find Friends and Events Near You!
            </div>
          </div>
          <div className={this.state.overlay ? "button-layout-fade" : "button-layout"}>
            <MainButton text="Log In" fadeOverlay={this.fadeOverlay}></MainButton>
            <MainButton text="Sign Up!" link="/signup"></MainButton>
          </div>
          </div>


    );
  }
}

export default HomePage;
