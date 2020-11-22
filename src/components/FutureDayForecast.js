import React from 'react';

class FutureDayForecast extends React.Component {

  render() {
    const forecast = this.props.forecast;

    function getImgUrl(imgName) {
      return "http://openweathermap.org/img/wn/" + imgName + "@2x.png";
    }

    function cleanUpTemp(temp) {
      return Math.round(temp) + '°';
    }

    return (
      <div className="day rounded-lg">
        <h3>{this.props.day}</h3>

        <p><img src={getImgUrl(forecast.weather[0].icon)} alt={forecast.weather[0].description} /></p>

        <h4>High: {cleanUpTemp(forecast.temp.max)}</h4>

        <h4>Low: {cleanUpTemp(forecast.temp.min)}</h4>
      </div>
    );
  }
}

export default FutureDayForecast;