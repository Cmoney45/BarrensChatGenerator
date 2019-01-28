// client.src.components.JokeBox

import React, { Component } from "react";
import API from '../../utils/API';
import debounce from "lodash.debounce";
import "./style.css";

class JokeBox extends Component {
    state = {
        jokeText: '',
        results: [],
        priorJokes: [],
        copySuccess: '',
        clockRunning: false,

    }

    delayedCallback = debounce(this.ajaxCall, 400)

    ajaxCall() {
        // Call Api to get a joke
        API.getJoke()
            .then(res => {
                const { value } = res.data;
                const newArray = this.state.priorJokes;

                if (newArray.includes(value.id)) {
                    this.ajaxCall();
                } else {
                    newArray.push(value.id);
                    newArray.sort();
                    let newJoke = value.joke;

                    // Search the joke for &quot and replace them. Not sure why these are in the API
                    while(newJoke.includes("&quot;")) {
                        newJoke = newJoke.replace("&quot;", '"')
                    }

                    this.setState({ priorJokes: newArray })
                    this.setState({ jokeText: newJoke })
                }

            })
            .catch(err => console.log(err));

    }

    onJokeClick(event) {
        event.preventDefault();
        this.delayedCallback(event);
        this.setState({copySuccess: ''});
        this.props.reset();
        if(!this.state.clockRunning) {
            setInterval(this.props.increment, 1000);
            this.setState({clockRunning: true})
        }
    }

    copyToClipboard = (e) => {
        e.preventDefault();
        this.textArea.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' });
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };


    render() {
        return (
            <div>
                <form >
                    <div className="row gtr-50">
                        <div className="col-12">
                            <textarea
                                value={this.state.jokeText}
                                name="jokeText"
                                ref={(textarea) => this.textArea = textarea}
                                onChange={this.handleInputChange}
                            >
                            </textarea>
                        </div>
                        <div className="col-12">
                            <ul className="actions">
                                {/* <li> */}
                                <button
                                    className="buttonPretty"
                                    onClick={this.onJokeClick.bind(this)}
                                    value="Get Joke"
                                >
                                    Get Joke
                                    </button>
                                {" "}
                                <button
                                    className="buttonPretty"
                                    onClick={this.copyToClipboard}
                                >
                                    Copy to Clipboard
                                    </button>
                                {this.state.copySuccess}
                                {/* </li> */}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default JokeBox;