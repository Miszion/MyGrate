import React from 'react';
import NavBar from '../Index/nav-bar';
import '../UserPage/user-page.css';
import Panel from './Panel';
import River from './river.jpg';
import EventDisc from '../EventPage/EventDisc';
export default class UserPage extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            discOpen : false,
            element: null
        }

        this.openDisc = this.openDisc.bind(this);
        this.closeDisc = this.closeDisc.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
        this.deleteChat = this.deleteChat.bind(this);
    }

    openDisc(element) {

        this.setState({
            discOpen: true,
            element: element
        })

    }

    deleteChat() {
        var chatrooms = this.state.chatGroups;

        chatrooms.pop();

        this.setState({
            chatGroups: chatrooms
        })
    }

    deleteEntry() {

        var booked = this.state.bookedList;

        booked.pop();

        this.setState({
            bookedList: booked
        })
    }

    closeDisc() {

        this.setState({
            discOpen: false,
            element: null
        })

    }


    componentDidMount() {

        if (this.props.state.bookedList) {

            this.setState({
                bookedList: this.props.state.bookedList
            })

        }

        if (this.props.state.chatGroups) {

            this.setState({
                chatGroups: this.props.state.chatGroups
            })

        }

    }




    render() {
       return( 
       <div className="user-page">
            <style>{"html {background-image: unset}"}</style>
            <NavBar text="MyGrate" color="#20232a"></NavBar>
            <div className="overlay"></div>
            <img src={River} className="background-pic" alt="concert"></img>
            <div className="welcome-text">Welcome, {this.props.state.userName}!</div>
            <div className="centered-panels">
                <Panel text="✔ Booked Events" deleteEntry={this.deleteEntry} openDisc={this.openDisc} link="/events" bookedList={this.state.bookedList && this.state.bookedList}>

                </Panel>
                <div className="empty-column"></div>
                <Panel text="✉ Chat Groups" link="/chatcreate" deleteChat={this.deleteChat} chatGroups={this.state.chatGroups && this.state.chatGroups}></Panel>
            </div>
            {this.state.discOpen &&
            <EventDisc color="#20232a" closeDisc={this.closeDisc} onEventPage={false} element={this.state.element && this.state.element}></EventDisc>
            }
        </div>);
    }




}