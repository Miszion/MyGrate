import React from 'react';
import '../UserPage/user-page.css';
import {Link} from 'react-router-dom';
import Event from '../EventPage/Event';

export default class Panel extends React.Component {


    constructor(props) {

        super(props);

        this.openDisc = this.openDisc.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
        this.deleteChat = this.deleteChat.bind(this);
    }


    deleteEntry() {

        this.props.deleteEntry();

    }

    deleteChat() {
        this.props.deleteChat();
    }


    openDisc(e){
        var string = e.currentTarget.dataset.id;
        var array = string.split(",");

        let event1 = new Event(array[0], array[1], array[2], array[3], array[4], array[5]);

        if (this.props.openDisc) {
        this.props.openDisc(event1);
        }
    }


    render() {
       return( <div className="panel-box">

                    {this.props.bookedList && 
                    <div className="list">
                      {this.props.bookedList.map(x => <div className="event-or-chat" data-id={[x.Title, x.Time, x.Date, x.Desc, x.Location, x.Type]} onClick={this.openDisc.bind(this)} key={x.Title}> <span className="title-user">{x.Title}</span> </div>)} 
                    </div>
                    }
                    {this.props.chatGroups && 
                    <div className="list">
                      {this.props.chatGroups.map(x => <div className="event-or-chat" key={x.Name}> <span className="title-user">{x.Name}</span> </div>)} 
                    </div>
                    }


           <div className="panel-title">
               <div className="special-character">{this.props.text.charAt(0)}</div>
               {this.props.text.substr(1)}
           </div>
           <div className="panel-divider"></div>
            <div className="circle-container">
                <Link to={this.props.link} className="circle green" >
                    <div className="plus">
                        &#43;
                    </div>
                </Link>
                <div className="circle red" onClick={this.props.bookedList ? this.deleteEntry : (this.props.chatGroups && this.deleteChat)}>
                    <div className="minus">
                        &#8722;
                    </div>
                </div>
            </div>
        </div>);
    }

}