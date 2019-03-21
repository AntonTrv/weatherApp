import React from 'react';

const Weather = (props) => {
  return(
    <div className="weather">

  {props.city &&
    <div>
    <p>Location:  {props.city}, {props.country}</p>
    <p>Temperature:  {props.temp} &#8451;</p>
    <p>Weather:  {props.weather}</p>
    <p>Humidity:  {props.humidity} %</p>
    <p>Pressure:  {props.pressure}</p>
    </div>
  }
  <p className="error">{props.error}</p>
  </div>
)
}

export default Weather;
