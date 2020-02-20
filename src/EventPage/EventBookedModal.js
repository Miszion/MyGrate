import React from 'react';
import {Link} from 'react-router-dom';
export default class EventBookedModal extends React.Component {


    render() {

        return(
            <div className="event-booked-modal">
                    <div className="modal-text">
                        You have just booked <b>{this.props.element.Title}!</b>
                        <div className="modal-subtext">
                            on {this.props.element.Date}!
                        </div>
                        </div>
                        <div className="modal-button-layout">
                            <Link to="/userpage" className="button">
                                <span className="button-text">Go to Dashboard</span>
                            </Link>
                            <div className="button" onClick={this.props.setBooked}>
                                <span className="button-text">Book another event</span>
                            </div>
                        </div>
                    </div>
        )


    }


}