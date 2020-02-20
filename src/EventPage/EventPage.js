import React from 'react';
import NavBar from '../Index/nav-bar';
import '../Index/App.css';
import FilterBar from './filter-bar';
import Food from './food.jpg';
import Music from './music.jpg';
import TV from './tv.jpg';
import History from './history.jpg';
import Movies from './movies.jpg';
import Misc from './misc.jpg';
import EventList from './event-list';
import Event from './Event';
import EventBookedModal from './EventBookedModal';
import { CSSTransition } from "react-transition-group";
export default class EventPage extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            eventListGen: false,
            selected: null
        }

        this.setEventList = this.setEventList.bind(this);
        this.bookEvent = this.bookEvent.bind(this);
        this.setBooked = this.setBooked.bind(this);
        this.changeSelectedFilter = this.changeSelectedFilter.bind(this);
        this.pickImage = this.pickImage.bind(this);
    }

    setEventList(list) {

        this.setState({
            evenListGen: true,
            genList: list
        })

    }


    pickImage() {

        if (!this.state.selected) {
            return;
        }
        else {

            if (this.state.selected === Food) {
                return(
                        <CSSTransition in={this.state.selected === Food} classNames="pic" timeout={200} unmountOnExit appear>
                            <img src={Food} id="food-pic" alt="food"></img>
                        </CSSTransition>
                 )

              
            }
            else if (this.state.selected === Music) {
                return (
                    <CSSTransition in={this.state.selected === Music} classNames="pic" timeout={200} unmountOnExit>
                            <img src={Music} id="music-pic" alt="concert"></img>
                        </CSSTransition>
                )
            }
            else if (this.state.selected === History) {
                return (
                    <CSSTransition in={this.state.selected === History} classNames="pic" timeout={200} unmountOnExit>
                            <img src={History} id="history-pic" alt="history"></img>
                        </CSSTransition>
                )
            }
            else if (this.state.selected === TV) {
                return (
                    <CSSTransition in={this.state.selected === TV} classNames="pic" timeout={200} unmountOnExit>
                            <img src={TV} id="tv-pic" alt="tv"></img>
                        </CSSTransition>
                )
            }
            else if (this.state.selected === Movies) {
                
                return (
                    <CSSTransition in={this.state.selected === Movies} classNames="pic" timeout={200} unmountOnExit>
                            <img src={Movies} id="movie-pic" alt="film reel"></img>
                        </CSSTransition>
                )
            }
            else if (this.state.selected === Misc) {
                return (
                    <CSSTransition in={this.state.selected === Misc} classNames="pic" timeout={200} unmountOnExit>
                            <img src={Misc} id="misc-pic" alt="confetti"></img>
                        </CSSTransition>
                )
            }


        }

    }

    changeSelectedFilter(selected) {

        this.setState({
            selected: selected
        });

    }

    setBooked() {

        this.setState({
            eventBooked: false,
            element: null
        })

    }

    bookEvent(element) {

        this.setState({
            eventBooked: true,
            element: element
        });

        this.props.bookEvent(element);

    }

    

  

    render() {


        let event1 = new Event("Food Party", "10:25PM", "11/30", "This is a fun food party event!", "Wicker Park", "Food");
        let event2 = new Event("Thanksgiving Potluck", "5:00PM", "11/28", "Join us for a thanksgiving potluck! BYOB.", "1850 N Kimball Ave", "Food");

        let event3 = new Event("Mission's Concert", "8:00PM", "12/01", "Come see my band play at 8:00PM!", "Concord Music Hall", "Music");
        let event4 = new Event("Jam Session", "9:00PM", "12/31", "Bring your instruments and jam at my house!", "1800 N. Kimball Ave", "Music");

        let event5 = new Event("Chicago History Fest", "4:00PM", "12/05", "Come learn about the birth of Chicago!", "Millenium Park", "History");
        
        let event6 = new Event("The Office Viewing Party", "3:00PM", "12/06", "Come join us as we watch the new IP Man movie!", "Allstate Arena", "TV");

        let event7 = new Event("Avengers Meet Up and Movie", "11:00PM", "12/11", "Come dress up as the avengers and see the new movie!", "AMC River North", "Movies");

        let event8 = new Event("Cosplay Mob", "All Day", "12/12", "Come cosplay with us downtown!", "Water Tower Place", "Misc");

        let eventList = [event1, event2, event3, event4, event5, event6, event7, event8];

        this.eventList = eventList;

        return (
            <div className="event-page">
                <div className="overlay"></div>
                {this.pickImage()}
                <NavBar text="MyGrate" color="#20232a"></NavBar>
                <FilterBar eventList={this.eventList} changeSelectedFilter={this.changeSelectedFilter} eventGenFunction={this.setEventList}></FilterBar>
                <EventList eventList={this.eventList} list={this.state.genList} bookEvent={this.bookEvent} visible={this.state.eventBooked}>
                </EventList>
                {this.state.eventBooked && <EventBookedModal setBooked={this.setBooked} element={this.state.element}></EventBookedModal>}
            </div>

        );

    }



}