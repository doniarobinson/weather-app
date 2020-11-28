import React, { useState } from 'react';
import './App.css';
import { getWeatherByCity } from '../api/server';
import TodayForecast from './TodayForecast';
import FutureDayForecast from './FutureDayForecast';

export default function App() {
  let [city, setCity] = useState('');
  let [timezone_offset, setTimezoneOffset] = useState(0);
  let [current, setCurrent] = useState('');
  let [hourly, setHourly] = useState('');
  let [days, setDays] = useState([]);
  let [dayNames, setDayNames] = useState([]);
  let [error, setError] = useState('');
  const daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  async function getWeather() {
    const response = await getWeatherByCity(city);
    if (response === "Error") {
      setError("Error looking up weather. Please try again.");
      setDays([]);
    }
    else {
      setError("");
      setTimezoneOffset(response.timezone_offset);
      setCurrent(response.current);
      setHourly(response.hourly);
      setDays([response.daily[0], response.daily[1], response.daily[2], response.daily[3], response.daily[4]]);

      // set daynames
      const currentDay = new Date().getDay();
      let tmpArray = [];
      for (let i = 1; i < 6; i++) {
        var findTheDay = (i + currentDay) % 7;
        tmpArray.push(daysofWeek[findTheDay]);
      }
      setDayNames(tmpArray);
    }
  };

  return (
    <div className="container rounded-lg">
      <div className="row get-city">
        <div className="col-md-5">
          <label className="mr-2" htmlFor="inputCity">Enter city name:</label>
          <input type="text" className="form-control mr-2" name="city" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)} />
          <button onClick={getWeather} className="btn btn-primary weather-button">Get weather</button>
        </div>
        <div className="col-md-7">
          {error ? <p className="error">{error}</p> : null}
          {current ? <TodayForecast timezone_offset={timezone_offset} current={current} hourly={hourly} /> : null}
        </div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2">
          {days[0] ? <FutureDayForecast day={dayNames[0]} forecast={days[0]} /> : null}
        </div>
        <div className="col-md-2">
          {days[1] ? <FutureDayForecast day={dayNames[1]} forecast={days[1]} /> : null}
        </div>
        <div className="col-md-2">
          {days[2] ? <FutureDayForecast day={dayNames[2]} forecast={days[2]} /> : null}
        </div>
        <div className="col-md-2">
          {days[3] ? <FutureDayForecast day={dayNames[3]} forecast={days[3]} /> : null}
        </div>
        <div className="col-md-2">
          {days[4] ? <FutureDayForecast day={dayNames[4]} forecast={days[4]} /> : null}
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

