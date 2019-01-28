// client.src.components.BodyHeader

import React, { Component } from 'react';
import "./style.css";

class BodyHeader extends Component {
    timeConverter (t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
    
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
      }

    render() {
        return (
            <h2>Time since previous Joke: {this.timeConverter(this.props.timer)}</h2>
        );
    }
}

export default BodyHeader;
