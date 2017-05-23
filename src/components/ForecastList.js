import React from 'react'
import ForecastRow from './ForecastRow'
import _ from 'lodash'
import ErrorBoard from './ErrorBoard'

const ForecastList = ({allForecast, errors}) => {
  if (!_.isEmpty(errors)) {
    return (
      <ErrorBoard
        type={errors.errorType}
        suggestion={errors.suggestion}
      />
    )
  } else {
    return (
      <table className="table">
        {
          !_.isEmpty(allForecast) &&
          <thead>
            <tr>
              <th>Date</th>
              <th>Low</th>
              <th>High</th>
              <th>Text</th>
            </tr>
          </thead>
        }
        <tbody>
          {
            allForecast.map((forecast, i)=> {
              return (
                <ForecastRow
                  key={i}
                  date={forecast.date}
                  low={forecast.low}
                  high={forecast.high}
                  text={forecast.text}
                />)
              }
            )
          }
        </tbody>
      </table>
    )
  }
}

export default ForecastList
