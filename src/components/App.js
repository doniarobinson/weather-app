import React from 'react';
import './App.css';
import { getWeatherByCity } from '../api/server';
import DayForecast from './DayForecast';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      temp: ''
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
    this.setState({ temp: response });
    console.log(this.state.temp);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            City:
          <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <DayForecast />
        <DayForecast />
        <DayForecast />
        <DayForecast />
        <DayForecast />
      </div>
    );
  }
}

export default App;
