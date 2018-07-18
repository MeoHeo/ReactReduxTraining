import React, { Component } from 'react';
import PropTypes from 'prop-types';

let orderNumber = 0;

export default class Greeting extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        console.log(orderNumber, 'Component invoked CONSTRUCTOR');
        orderNumber++;
    }
    componentWillMount() {
        console.log(orderNumber, 'Component WILL MOUNT!')
        orderNumber++;
    }
    componentDidMount() {
        console.log(orderNumber, 'Component DID MOUNT!')
        orderNumber++;
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!, new props: ', newProps.propFromParent)
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('should Component UPDATE!, new props: ', newProps.propFromParent)
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!, next props: ', nextProps.propFromParent);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!, prev props: ', prevProps.propFromParent)
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    render() {
        console.log(orderNumber, 'Component RENDER');
        orderNumber++;
        return (
            <h1>{this.props.propFromParent}, {this.props.name}</h1>
        );
    }
}

// Specifies the default values for props:
Greeting.defaultProps = {
    name: 2
};
Greeting.propTypes = {
    name: PropTypes.string
};
