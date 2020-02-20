import React from 'react'
import backArrow from './backArrow.svg';
export default class EventDisc extends React.Component {

    constructor(props) {
        super(props);

        this.deRender = this.deRender.bind(this);
        this.bookEvent= this.bookEvent.bind(this);

    }


    

    deRender() {

       if (this.props.currentInput){
           this.props.switchList(this.props.currentInput);
       }
       else if (this.props.stateToNone) {
           this.props.stateToNone();
       }
       else if (this.props.deRender) {
        this.props.deRender();
       }
       else if (this.props.closeDisc) {
           this.props.closeDisc();
       }

       
    }


    bookEvent() {
        
        if (this.props.currentInput){
            this.props.switchList(this.props.currentInput);
        }
        else {
            this.props.stateToNone();
        }


        this.props.bookEvent(this.props.element);
    }




    render() {

        return(
           <div className="event-disc" style={{backgroundColor: this.props.color && this.props.color, top: this.props.color && "30%", animation: this.props.color && "imgAppear ease-in .3s forwards", height: this.props.color && "50%", left: this.props.color && "26%"}}>
               <img src={backArrow} style={{maxHeight: "60px", maxWidth : "60px", cursor: "pointer"}} alt="back arrow" onClick={this.deRender}></img>
                <div className="desc-text" style={{fontSize: '40px', position: "relative", top: '20px', textAlign: 'center', marginBottom: '-25px'}}>
                    <b>{this.props.element.Title}</b>
                </div>
               <div className="event-info">
                <div className="desc-text">
                    <b>Event Time:</b> {this.props.element.Time}
                </div>
                <div className="desc-text">
                   <b>Event Date:</b> {this.props.element.Date}
                </div>
                <div className="desc-text">
                    <b>Event Location: </b>{this.props.element.Location}
                </div>
                <div className="desc-text">
                    <b>Event Description:</b> {this.props.element.Desc}
                </div>
            </div>
            {this.props.onEventPage &&
            <div className="button-list">
                <div className="button" onClick={this.bookEvent}><span className="button-text">Book Event</span></div>
                <div className="button"><span className="button-text">Save Event for Later</span></div>
                <div className="button"><span className="button-text">Invite Friends</span></div>
            </div>
             }
            </div>
        );

    }

}