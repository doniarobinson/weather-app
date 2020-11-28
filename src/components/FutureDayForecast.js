import React from 'react';

export default function FutureDayForecast({ day, forecast }) {
  function cleanUpTemp(temp) {
    return Math.round(temp) + '°';
  }

  function getImgUrl(imgName) {
    return `http://openweathermap.org/img/wn/${imgName}@2x.png`;
  }

  return (
    <div className="day rounded-lg">
      <h3>{day}</h3>

      <p><img src={getImgUrl(forecast.weather[0].icon)} alt={forecast.weather[0].description} /></p>

      <h4>High: {cleanUpTemp(forecast.temp.max)}</h4>

      <h4>Low: {cleanUpTemp(forecast.temp.min)}</h4>
    </div>
  );
}