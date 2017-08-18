import React, {Component} from 'react';
import config from './config.json';

import styles from './Greeter.css';

class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                <h1>{config.greetText}</h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Greeter
