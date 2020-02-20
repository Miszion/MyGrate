import React from 'react';
import NavBar from '../Index/nav-bar';
import './chat.css';
import ChatSub from './ChatSub';
export default class ChatCreate extends React.Component {


    constructor(props) {
        super(props);

        this.changeInput = this.changeInput.bind(this);
        this.changeDesc = this.changeDesc.bind(this);

        this.state = {
            input: null,
            desc: null
        }


    }


    changeInput() {

        this.setState({
            input: document.getElementById("chat-input1").value
        });

    }

    changeDesc() {

        this.setState({
            desc: document.getElementById("chat-input2").value
        });

    }




    render() {
        return(
        <div className="chat-create">
            <NavBar text="MyGrate" color="#20232a"></NavBar>
            <div className="chat-creation-page">
                <div className="chat-creation-title">Create Chat Room</div>
                <div className="chat-partition" id="chat-create-partition">
                    <div className="chat-room-form">
                        <form>
                            <div className="text-prompt" id="chat-prompt">Room Name</div><input id="chat-input1" type="text" name="fname" onChange={this.changeInput}></input><br></br>
                            <div className="text-prompt" id="chat-prompt">Description</div><input id="chat-input2" type="text" name="lname" onChange={this.changeDesc}></input>
                        </form>
                    </div>
                </div>
                <ChatSub state={this.props.state} chatTitle={this.state.input && this.state.input} chatDesc={this.state.desc && this.state.desc}></ChatSub>
            </div>
        </div>);
    }

}