import React, { Component } from 'react'
import City from './City'
import ForecastList from './ForecastList'
import WeatherForm from '../containers/WeatherForm'

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Weather Forecast</h1>
            <h2>USA</h2>
            <br/><br/>
            <WeatherForm />
            <hr/><br/>
            <City />
            <br/><br/>
            <ForecastList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
