import React from 'react';

export default function TodayForecast({ timezone_offset, current, hourly }) {
  function cleanUpTemp(temp) {
    return Math.round(temp) + '°';
  }

  function getImgUrl(imgName) {
    return `http://openweathermap.org/img/wn/${imgName}@2x.png`;
  }

  function cleanUpTime(time) {
    const noOffsetDate = new Date(time * 1000);
    const offset = noOffsetDate.getTimezoneOffset() * 60;
    const finalDate = new Date((time + offset + timezone_offset) * 1000);
    const options = {
      hour: 'numeric',
      hour12: true
    };

    return finalDate.toLocaleString('en-US', options);
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