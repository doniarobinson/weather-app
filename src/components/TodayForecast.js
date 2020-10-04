import React from 'react';

class TodayForecast extends React.Component {

  render() {
    const current = this.props.current;
    const hourly = this.props.hourly;

    function getImgUrl(imgName) {
      return "http://openweathermap.org/img/wn/" + imgName + "@2x.png";
    }

    function cleanUpTemp(temp) {
      return Math.round(temp) + '°';
    }

    return (
      <div className="day rounded-lg">

        <h4>Current: {cleanUpTemp(current.temp)}</h4>

        <p><img src={getImgUrl(current.weather[0].icon)} alt={current.weather[0].description} /></p>

        <p>{hourly[0] ? cleanUpTemp(hourly[0].temp) : null}</p>

      </div>
    );
  }
}

export default TodayForecast;