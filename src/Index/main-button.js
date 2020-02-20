
import React from "react"
import { Link} from 'react-router-dom';
export default class MainButton extends React.Component {


    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div id="main-button" onClick={this.props.fadeOverlay && this.props.fadeOverlay}>
                <div id="centered-text">
                    <Link to={this.props.link}>{this.props.text}</Link>
                </div>
            </div>
        );
    }

}