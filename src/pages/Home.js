// client.src.pages.Home.js

import React, { Component } from "react";
import BodyHeader from "../components/BodyHeader";
import JokeBox from "../components/JokeBox";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            lastJokeCounter: 0,
            lastJokeInterval: 0,
        }
    }

    increment = () => {
        this.setState(
            {
                lastJokeCounter: this.state.lastJokeCounter + 1
            })
    }

    resetClock = () => {
        this.setState({ lastJokeCounter: 0 })
    }

    render() {
        return (
            <div>
                {/* TODO : Add Timer countdown since last button push */}
                <BodyHeader
                    timer={this.state.lastJokeCounter}
                />
                <div>
                    <JokeBox
                        timer={this.state.lastJokeCounter}
                        increment={this.increment}
                        reset={this.resetClock}
                    />
                </div>
            </div>
        );
    }
}

export default Home;
