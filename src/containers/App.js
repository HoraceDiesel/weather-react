import React, { Component } from 'react'
import City from './City'

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Weather Forecast</h1>
            <h2>USA</h2>
            <br/><br/>
            <div className="row">
              <div className="col-xs-9">
                <input type="text" className="form-control" placeholder="Enter State Code, eg: CA" />
              </div>
              <div className="col-xs-3">
                <button className="btn btn-default btn-block">Search</button>
              </div>
            </div>
            <hr/><br/>
            <City />
            <br/><br/>
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Low</th>
                  <th>High</th>
                  <th>Text</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01 Dec 2016</td>
                  <td>23</td>
                  <td>52</td>
                  <td>Partly Cloudy</td>
                </tr>
                <tr>
                  <td>02 Dec 2016</td>
                  <td>21</td>
                  <td>47</td>
                  <td>Sunny</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
