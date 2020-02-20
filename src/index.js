import React from 'react';
import ReactDOM from 'react-dom';
import './Index/index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignPage from "./SignPage/SignPage";
import HomePage from "./Index/HomePage";
import UserPage from './UserPage/UserPage';
import EventPage from './EventPage/EventPage';
import ChatCreate from './ChatPage/ChatCreate';
import Friend from './Index/Friend';


class RouterSetup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bookedList: [],
      chatGroups: [],
      friendList: [new Friend("Thomas R"), new Friend("Mission M")],
      userName: "User"
    }

    this.bookEvent = this.bookEvent.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
  };


  changeUserName(name) {
    this.setState({
      userName: name
    })
  }

  bookEvent(element) {

    var list = this.state.bookedList;

    list.push(element);

    this.setState({
      bookedList: list,
      chatGroups: this.state.chatGroups
    })

  }

  render() {

    return (<Router>
    <Switch>
        <Route exact path="/" render={props => (<HomePage state={this.state} changeUserName={this.changeUserName}></HomePage>)}/>
        <Route path="/signup" render={props => (<SignPage state={this.state} changeUserName={this.changeUserName}></SignPage>)}/>
        <Route path="/userpage" render={props => (<UserPage state={this.state}></UserPage>)}/>
        <Route path="/events" render={props => (<EventPage bookEvent={this.bookEvent}></EventPage> )}/>
        <Route path="/chatcreate" render={props => (<ChatCreate state={this.state}></ChatCreate>)}/>
    </Switch>
</Router>)
  }
}


ReactDOM.render(<RouterSetup/>
  ,
  document.getElementById('root')
);