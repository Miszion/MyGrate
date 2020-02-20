import React from 'react';
import './event-page.css';
import Food from '../EventPage/food.jpg';
import Music from '../EventPage/music.jpg';
import History from '../EventPage/history.jpg';
import TV from '../EventPage/tv.jpg';
import Movies from '../EventPage/movies.jpg';
import Misc from '../EventPage/misc.jpg';

export default class FilterBar extends React.Component {


    constructor(props) {
        super(props);

        this.searchKeyword = this.searchKeyword.bind(this);
        this.checkFood = this.checkFood.bind(this);
        this.checkMusic = this.checkMusic.bind(this);
        this.checkHistory = this.checkHistory.bind(this);
        this.checkTV = this.checkTV.bind(this);
        this.checkMovies = this.checkMovies.bind(this);
        this.checkMisc = this.checkMisc.bind(this);
        this.generateList = this.generateList.bind(this);
    }





    generateList(list) {
        

        this.props.eventGenFunction(list);

    }

    searchKeyword(keyword, eventList) {

        var newList = [];


        for (var x = 0; x < eventList.length; x++) {

           if (eventList[x].Type === keyword)
           {
                newList.push(eventList[x]);
           }
            
        }


        return newList;

    }



    checkFood() {
        
        var list = this.searchKeyword("Food", this.props.eventList);
        this.props.changeSelectedFilter(Food)
        this.generateList(list);

    }

    checkMusic() {
        
        var list = this.searchKeyword("Music", this.props.eventList);
        this.props.changeSelectedFilter(Music)
        this.generateList(list);
  
    }

    checkHistory() {
        
        var list = this.searchKeyword("History", this.props.eventList);
        this.props.changeSelectedFilter(History)
        this.generateList(list);
  
    }

    checkTV() {
        
        var list = this.searchKeyword("TV", this.props.eventList);
        this.props.changeSelectedFilter(TV)
        this.generateList(list);
  
    }

    checkMovies() {
        
        var list = this.searchKeyword("Movies", this.props.eventList);
        this.props.changeSelectedFilter(Movies)
        this.generateList(list);

    }

    checkMisc() {
        
        var list = this.searchKeyword("Misc", this.props.eventList);
        this.props.changeSelectedFilter(Misc)
        this.generateList(list);
    }


    render() {
        return(
            <div className="filter-bar">
                <div className="filter-fade">
                    <div className="filter-title">Filters</div>
                    <div className="filter-form">
                        <form>
                            <input type="radio" name="group1" onClick={this.checkFood} value="Food"></input><span className="filter-text"> Food</span><br></br><br></br>
                            <input type="radio" name="group1" onClick={this.checkMusic}  value="Music"></input><span className="filter-text"> Music</span><br></br><br></br>
                            <input type="radio" name="group1" onClick={this.checkHistory}  value="History"></input><span className="filter-text"> History</span><br></br><br></br>
                            <input type="radio" name="group1" onClick={this.checkTV} value="TV"></input><span className="filter-text"> TV</span><br></br><br></br>
                            <input type="radio" name="group1" onClick={this.checkMovies} value="Movies"></input><span className="filter-text"> Movies</span><br></br><br></br>
                            <input type="radio" name="group1" onClick={this.checkMisc}  value="Misc"></input><span className="filter-text"> Misc</span><br></br><br></br>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}