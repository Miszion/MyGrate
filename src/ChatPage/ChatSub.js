import React from 'react';
import './chat.css';
import {Link} from 'react-router-dom';
import ChatRoom from './ChatRoom';
export default class ChatSub extends React.Component {


    constructor(props) {
        super(props);
        this.addChatRoom = this.addChatRoom.bind(this);
    }


    addChatRoom() {

        if (this.props.chatTitle && this.props.chatDesc){
            this.props.state.chatGroups.push(new ChatRoom(this.props.chatTitle, this.props.chatDesc))
        }
        else {
            alert("Please enter all fields.")
        }

    }


    render() {



        return(
            <div className="panel-array">
            <div className="friend-panel">
                <div className="friend-panel-title">
                Chatroom Friends
                </div>
                <div className="friend-section">
                {this.props.state.friendList && this.props.state.friendList.map( x => 
                    <div className="friend-slip">
                        <div className="inner-slip">
                        <input type="checkbox" name="friend" value={x.Title}></input>{x.Name}
                        </div>
                    </div>)}
                </div>
            </div>
            <div className="button-array">
            <Link to={(this.props.chatTitle && this.props.chatDesc) && "/userpage"} className="button" onClick={this.addChatRoom}>
                <span className="button-text"><b>Create Room</b></span>
            </Link>
            </div>
            </div>
        )
    }



}