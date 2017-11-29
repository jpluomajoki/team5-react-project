import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import sidebar from './sidebar'

const reducers = {
  sidebar
}

export default combineReducers({
  ...reducers,
  routing
})
