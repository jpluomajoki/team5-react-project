import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { localeReducer as locale } from 'react-localize-redux'

import data from './data'

const reducers = {
  data,
  locale
}

export default combineReducers({
  ...reducers,
  routing
})
