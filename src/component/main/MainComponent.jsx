import React, { Component } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './main.css';

export default class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            startDate: "mm/dd/yyyy",
            endDate: "mm/dd/yyyy"
        }
    }
    onChangeDate = date => {
        this.setState({ date,startDate:moment(date).format('MM/DD/YYYY') })
    }
    render() {
        return (
            <div className='MainComponent row'>
                <div className="MainComponent-top col-md-12">
                    <p>Annual Balance</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th >Total annual leave</th>
                                <th >Remaining annual leave day</th>
                                <th >Annual leave taken</th>
                                <th >Total compensation leave</th>
                                <th >Remaining compensation leave day</th>
                                <th >Compensation leave taken</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="MainComponent-bottom col-md-12">
                    <p>Leave Request</p>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label col-sm-2 col-xs-4">Leave type(*)</label>
                            <div className="col-sm-10 col-xs-8 dropdown">

                                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" style={{ width: '100%' }}>
                                    <span style={{ float: 'left' }}>--Select leave type--</span>
                                    <i className="fa fa-caret-down" style={{ float: 'right' }}></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Mourning leave</a></li>
                                    <li><a href="#">Wedding leave</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2 col-xs-4">From date(*)</label>
                            <div className="col-sm-10 col-xs-8 dropdown">

                                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" style={{ width: '100%' }}>
                                    <span style={{ float: 'left' }}>{this.state.startDate}</span>
                                    <i className="fa fa-calendar" aria-hidden="true" style={{ float: 'right' }}></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <Calendar
                                        onChange={this.onChangeDate}
                                        value={this.state.date}
                                    />
                                </ul>
                            </div>

                        </div>

                    </form>
                </div>
            </div >
        );
    }
}
