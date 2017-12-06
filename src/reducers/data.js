import reduce from 'utils/reduce'
import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  regionLevels: [],
  regions: [],
  scenarios: [],
  indicatorCategories: [],
  timePeriods: [],
  data: {},
  error: null,
  pending: false
}

const setError = (state, { error }) => ({
  pending: false,
  error
})

const setPending = (state, { payload }) => ({
  pending: true,
  error: null
})

const demoReducer = reduce(initialState, {
  [ActionTypes.FETCH_REGION_LEVELS]: setPending,
  [ActionTypes.FETCH_REGION_LEVELS + '_ERROR']: setError,
  [ActionTypes.FETCH_REGION_LEVELS + '_SUCCESS']: (state, { payload }) => ({
    ...initialState,
    regionLevels: payload.data
  }),

  [ActionTypes.FETCH_REGIONS]: setPending,
  [ActionTypes.FETCH_REGIONS + '_ERROR']: setError,
  [ActionTypes.FETCH_REGIONS + '_SUCCESS']: (state, { payload }) => ({
    ...initialState,
    regionLevels: state.regionLevels,
    regions: payload.data
  }),

  [ActionTypes.FETCH_SCENARIOS]: setPending,
  [ActionTypes.FETCH_SCENARIOS + '_ERROR']: setError,
  [ActionTypes.FETCH_SCENARIOS + '_SUCCESS']: (state, { payload }) => ({
    data: payload.data[0],
    scenarios: payload.data[0].scenarios,
    indicatorCategories: payload.data[0].indicatorCategories,
    timePeriods: payload.data[0].timePeriods,
    error: null,
    pending: false
  })
})

export default demoReducer
