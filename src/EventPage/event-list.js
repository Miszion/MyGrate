import React from 'react';
import './event-page.css';
import Search from './search.png';
import EventSlip from './EventSlip';
import EventDisc from './EventDisc';

export default class EventList extends React.Component {



    constructor(props) {
        super(props);
        this.renderEventPage = this.renderEventPage.bind(this);
        this.deRender = this.deRender.bind(this);

        this.matchEvents = this.matchEvents.bind(this);
        this.stateToNone = this.stateToNone.bind(this);
        this.switchList = this.switchList.bind(this);
        this.state = {
            pageRendered: false
        }

    }


    matchEvents() {

       


        var text = document.getElementById('search').value;

        if (text === '') {
            return;
        }

        var list = this.props.eventList;

        var newList = [];


        for (var x = 0; x < list.length; x++) {

            if (text.toLowerCase() === list[x].Title.toLowerCase()) {
                newList.push(list[x]);
            }

        }


        this.setState({
            pageRendered: false,
            eventList: newList,
            input: text
        })



    }




    stateToNone() {

        this.setState({
            pageRendered: false,
            eventList: null,
            input: null
        })

    }


    switchList(input) {

        var text = input;

        var list = this.props.eventList;

        var newList = [];


        for (var x = 0; x < list.length; x++) {

            if (text.toLowerCase() === list[x].Title.toLowerCase()) {
                newList.push(list[x]);
            }

        }


        this.setState({
            pageRendered: false,
            eventList: newList,
            input: input
        })
        
    }

    deRender() {

        this.setState({
            pageRendered: false,
            element: null
        })
    }


    renderEventPage(element) {

        this.setState({
            pageRendered: true,
            element: element
        })

    }


    render() {



        return(
            (!this.state.pageRendered ?
            <div className="event-tab" style={{opacity: this.props.visible ? 0 : 1}}>
                <div className="search">
                    <div className="search-bar">
                        <input type="text" onChange={this.stateToNone} id="search" placeholder="Enter event or keyword..." value={this.state.input ? this.state.input : ""}></input>
                        <img src={Search} id="search-icon" alt="eye glass" onClick={this.matchEvents}></img>
                    </div>
                </div>
                <div className="event-list">
                <div className="trending-label">#Trending</div>
                {this.state.eventList ?
                <div className="events-found">
                    {this.state.eventList.map(element => 
                        <EventSlip element={element} key={element.Title} renderEventPage={this.renderEventPage}></EventSlip>
                    )}
                </div>
                : (this.props.list && 
                    <div className="events-found">
                    {this.props.list.map(element => 
                    <EventSlip element={element} key={element.Title} renderEventPage={this.renderEventPage}></EventSlip>
                    )}
                    </div>
                )}
            </div>
            </div> : <EventDisc switchList={this.switchList} onEventPage={true} element={this.state.element && this.state.element} deRender={this.deRender} currentInput={this.state.input} stateToNone={this.stateToNone} bookEvent={this.props.bookEvent}></EventDisc>
            )

        )
    }


}