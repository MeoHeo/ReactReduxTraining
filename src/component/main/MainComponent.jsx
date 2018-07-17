import React, { Component } from 'react';
import './main.css';

export default class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='MainComponent col-md-12'>
            <h1 className="MainComponent-test">MAIN COMPONENT</h1>
            </div>
        );
    }
}
