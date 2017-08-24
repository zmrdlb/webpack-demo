import React, {Component} from 'react';
import config from './config.json';

import styles from './Greeter.less';
import ArrowPng from './arrow-circle-left.png';

class Greeter extends Component {
    render() {
        return (
            <div className="root">
                <h1>{config.greetText}</h1>
                <p>{this.props.children}</p>
                <img src={ArrowPng} />
                <span className="number">28</span>
                <div className="house"></div>
            </div>
        );
    }
}

export default Greeter
