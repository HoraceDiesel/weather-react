import React, { Component } from 'react'
import get from '../requestManager'

class WeatherForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      empty: false
    }
  }

  handleClick = () => {
    const val = this._input.value.replace(/[^a-z0-9]/gi,'')
    if (val.length !== 0) {
      this.setState({
        empty: false,
        fetching: true
      },
      ()=>{
        get(val)
          .then((res)=>res.data.query.results)
          .then((data)=>{
            this._input.value = ''
            if (data === null) {
              this.props.renderErrors('invalid')
            } else if (data.channel.location.country !== "United States") {
              this.props.renderErrors('outside US')
            } else {
              this.props.onButtonPress(data.channel.location.city, data.channel.item.forecast)
            }
          })
          .then(this.props.clearErrors())
      })
    } else {
      this.setState({
        empty: true
      })
    }
  }

  preventInvalidInput = (e) => {
    const re = /[0-9a-zA-Z]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  render() {
    const { empty } = this.state
    return (
      <div className="row">
        <div
          className={`
            col-xs-9 form-group
            ${empty && "has-error"}
          `}
        >
          <input
            ref={ r => this._input = r }
            type="text"
            className="form-control"
            id="city-name"
            placeholder="Enter State Code, eg: CA"
            onKeyPress={(e)=>this.preventInvalidInput(e)}
          />
          {
            empty && (
              <label className="control-label" htmlFor="city-name">
                City/State cannot be blank
              </label>
            )
          }
        </div>
        <div className="col-xs-3">
          <button onClick={this.handleClick} className="btn btn-default btn-block">Search</button>
        </div>
      </div>
    )
  }
}

export default WeatherForm
