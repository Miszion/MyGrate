import React from 'react';

export default class EventSlip extends React.Component {


    constructor(props) {
        super(props);

        this.renderPage = this.renderPage.bind(this);

    }


    renderPage() {

        this.props.renderEventPage(this.props.element);

    }



    render() {

       return( <div className="event-slip" onClick={this.renderPage}>
                             <div className="event-title" key={this.props.element.Title}>
                                 {this.props.element.Title}
                             </div>
                        </div>);
    }

}