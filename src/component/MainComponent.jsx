import React, { Component } from 'react';


export default class Greeting2 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillUnmount() {
        console.log('Greeting 2 Component WILL UNMOUNT!')
    }
    render() {
        return (
            <h1>{this.props.propFromParent}, {this.props.name}</h1>
        );
    }
}

// Specifies the default values for props:
Greeting2.defaultProps = {
    name: 'WOOF WOOF'
};
