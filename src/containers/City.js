import { connect } from 'react-redux'
import City from '../components/City'
// import { city } from '../actions'

const mapStateToProps = (state) => {
  return {
    city: state.city,
    errors: state.errors
  }
}

export default connect(mapStateToProps)(City)
