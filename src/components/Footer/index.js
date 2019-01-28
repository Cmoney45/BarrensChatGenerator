import React, { Component } from 'react';
import "./style.css";

export default class MyNavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <footer>
                <a
                    href="https://www.linkedin.com/in/colton-scherer-11161b83/"
                    target="_blank"
                    rel="noopener"
                >
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                    href="https://github.com/Cmoney45"
                    target="_blank"
                    rel="noopener"
                >
                    <i className="fab fa-github fa-2x"></i>
                </a>
            </footer>
        );
    }
}
