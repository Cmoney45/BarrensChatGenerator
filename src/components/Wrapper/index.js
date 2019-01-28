// client.src.components.Wrapper

import React, { Component } from 'react';
import "./style.css";

class Wrapper extends Component {

    render() {
        const trueClassName = `wrapper ${this.props.classPass}`;

        return (
            <div
                className={trueClassName}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Wrapper;
 