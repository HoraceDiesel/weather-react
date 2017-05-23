import { connect } from 'react-redux'
import City from '../components/City'
// import { city } from '../actions'

const mapStateToProps = (state) => {
  return {
    city: state.city
  }
}

export default connect(mapStateToProps)(City)
