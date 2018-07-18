import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './date.css'
// import moment from 'moment';

export default class DateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: null,
        }
    }
    handleChange = (date) => {
        this.setState({
            date: date
        });
        this.props.notifyDate(this.props.type,date);
    }
    render() {
        return (

            <div className="form-group">
                <label className="control-label col-sm-2 col-xs-4">
                    {this.props.type === "startDate" ? 'From date(*)' : 'To date(*)'}
                </label>
                <div className="col-sm-10 col-xs-8">
                    <i className="fa fa-calendar calendar" aria-hidden="true"></i>
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.handleChange}
                        minDate={this.props.startDate?this.props.startDate:null}
                        maxDate={this.props.endDate?this.props.endDate:null}
                        placeholderText="mm/dd/yyyy"
                        locale="en-gb"
                    />
                </div>
            </div>
        );
    }
}
