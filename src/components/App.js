import React from 'react';
import './App.css';
import { getWeatherByCity } from '../api/server';
import DayForecast from './DayForecast';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      day0: '',
      day1: '',
      day2: '',
      day3: '',
      day4: '',
      dayNames: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const response = await getWeatherByCity(this.state.city);
    if (response === "Error. Please try again.") {
      // TODO: do something, alert is easy
    }
    else {
      console.log(response);
      this.setState({ day0: response.daily[0] });
      this.setState({ day1: response.daily[1] });
      this.setState({ day2: response.daily[2] });
      this.setState({ day3: response.daily[3] });
      this.setState({ day4: response.daily[4] });
      // set daynames
      const daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const currentDay = new Date().getDay();
      let tmpArray = [];
      for (let i = 1; i < 6; i++) {
        let findTheDay = (i + currentDay) % 7;
        tmpArray.push(daysofWeek[findTheDay]);
      }
      this.setState({ dayNames: tmpArray });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row get-city">
          <div className="col-md-5">
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <label className="mr-2" htmlFor="inputCity">City</label>
              <input type="text" className="form-control mr-2" name="city" id="inputCity" value={this.state.city} onChange={this.handleChange} />
              <button type="submit" className="btn btn-primary">Get Weather</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            {this.state.day0 ? <DayForecast day={this.state.dayNames[0]} forecast={this.state.day0} /> : null}
          </div>
          <div className="col-md-2">
            {this.state.day1 ? <DayForecast day={this.state.dayNames[1]} forecast={this.state.day1} /> : null}
          </div>
          <div className="col-md-2">
            {this.state.day2 ? <DayForecast day={this.state.dayNames[2]} forecast={this.state.day2} /> : null}
          </div>
          <div className="col-md-2">
            {this.state.day3 ? <DayForecast day={this.state.dayNames[3]} forecast={this.state.day3} /> : null}
          </div>
          <div className="col-md-2">
            {this.state.day4 ? <DayForecast day={this.state.dayNames[4]} forecast={this.state.day4} /> : null}
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
}

export default App;
