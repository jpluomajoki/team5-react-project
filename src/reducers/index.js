import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import demo from './demo'

const reducers = {
  // add reducers here

  demo
}

export default combineReducers({
  ...reducers,
  routing
})
