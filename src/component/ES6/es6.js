import React, { Component } from 'react';
// import '../../App.css';

class ES6 extends Component {
  testDate = () => {
    let a = new Date();
    return a.toDateString();
  }
  testArray = () => {
    var names = new Array("Mary", "Tom", "Jack", "Jill");
    return names;
  }
  test = (a, b) => {
    var t = a;
    a = `b`;
    b = t;
  }
  render() {
    return (
      <div className="es6">
        <p className="es6-intro">
          TEST WITH SUIT CSS
        </p>
      </div>
    );
  }
}

export default ES6;
