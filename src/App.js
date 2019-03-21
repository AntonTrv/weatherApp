import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';
import './index.css';

const API_KEY = "659e2238c1a331d9099411f65c35278d";//api key from web-site


 class App extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       temp: undefined,
       weather: undefined,
       city: undefined,
       country: undefined,
       humidity: undefined,
       pressure: undefined,
       error: undefined
     }

     this.gettingWeather = this.gettingWeather.bind(this);
     this.defineBackground = this.defineBackground.bind(this);
   }



  gettingWeather = async (e) => {//asychronous function
    e.preventDefault();//asychronous prevention of page reload
    const city = e.target.elements.city.value;//take e(target element),choose from its elements 'city'-element and take it's value


    if(city) {

    const api_url = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);//asynchronous fetch from the address

    const data = await api_url.json();//fetched json info
    console.log(data)

    if(data.cod !== "404"){


    this.setState({
      temp: data.main.temp,
      weather: data.weather[0].main,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      error: undefined
    });
    console.log(data);

  } else{
    this.setState({
      error: data.message
    })
  }

  }else {
    this.setState({
      temp: undefined,
      weather: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      pressure: undefined,
      error: 'Enter name of the city'
    })
  }


  }

  defineBackground() {
    switch (this.state.weather) {
      case 'Sun': return 'sunny';
        break;
      case 'Rain': return 'rainy';
        break;
      case 'Clear': return 'sunny';
        break;
      case 'Clouds': return 'cloudy';
        break;
      case 'Haze': return 'haze';
        break;
      case 'Drizzle': return 'drizzle';
        break;
      case 'Snow': return 'snowy';
        break;
      default: return 'no-data';
        break;

    }
    return;
  }

  render() {
    return(
      <div id='wrapper'>
      <div id="container">
      <div id="left" className={this.defineBackground()}>
      <Info/>
      </div>
      <div id="right">
      <Form weatherMethod = {this.gettingWeather}/>
      <Weather
      error = {this.state.error}
      temp = {this.state.temp}
      weather = {this.state.weather}
      city = {this.state.city}
      country = {this.state.country}
      humidity = {this.state.humidity}
      pressure = {this.state.pressure}
      />

      </div>
      </div>
      </div>
    );
  }
}

export default App;
