import React from 'react';

class TodayForecast extends React.Component {

  render() {
    const current = this.props.current;
    const hourly = this.props.hourly;
    const timezone_offset = this.props.timezone_offset;

    function getImgUrl(imgName) {
      return "http://openweathermap.org/img/wn/" + imgName + "@2x.png";
    }

    function cleanUpTime(time) {
      let noOffsetDate = new Date(time * 1000);
      let offset = noOffsetDate.getTimezoneOffset() * 60;
      let finalDate = new Date((time + offset + timezone_offset) * 1000);

      const options = {
        hour: 'numeric',
        hour12: true
      };
      let timeString = finalDate.toLocaleString('en-US', options);
      return timeString;
    }

    function cleanUpTemp(temp) {
      return Math.round(temp) + '°';
    }

    return (
      <div className="day rounded-lg">

        <h4>Now: {cleanUpTemp(current.temp)}</h4>

        <p><img src={getImgUrl(current.weather[0].icon)} alt={current.weather[0].description} /></p>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            {hourly[1] ?
              <p>{cleanUpTime(hourly[1].dt)}<br />
                {cleanUpTemp(hourly[1].temp)}</p>
              : null}
          </div>
          <div className="col-md-2">
            {hourly[2] ?
              <p>{cleanUpTime(hourly[2].dt)}<br />
                {cleanUpTemp(hourly[2].temp)}</p>
              : null}
          </div>
          <div className="col-md-2">
            {hourly[3] ?
              <p>{cleanUpTime(hourly[3].dt)}<br />
                {cleanUpTemp(hourly[3].temp)}</p>
              : null}
          </div>
          <div className="col-md-2">
            {hourly[4] ?
              <p>{cleanUpTime(hourly[4].dt)}<br />
                {cleanUpTemp(hourly[4].temp)}</p>
              : null}
          </div>
          <div className="col-md-2">
            {hourly[5] ?
              <p>{cleanUpTime(hourly[5].dt)}<br />
                {cleanUpTemp(hourly[5].temp)}</p>
              : null}
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    );
  }
}

export default TodayForecast;