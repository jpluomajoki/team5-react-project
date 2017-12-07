import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import data from './data'

const reducers = {
  data
}

export default combineReducers({
  ...reducers,
  routing
})
