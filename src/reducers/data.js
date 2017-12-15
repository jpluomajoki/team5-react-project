import reduce from 'utils/reduce'
import * as ActionTypes from '../constants/ActionTypes'
import { selectIndicators } from '../actions/data'

const initialState = {
  regionLevels: [],
  regions: [],
  scenarios: [],
  indicatorCategories: [],
  timePeriods: [],
  selectedValues: {
    regionLevel: -1,
    region: -1,
    scenarioCollection: -1,
    scenarios: [],
    indicators: [],
    timePeriod: -1
  },
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
  [ActionTypes.FETCH_REGION_LEVELS]: (state, { payload }) => ({
    selectedValues: {
      ...state.selectedValues,
      regionLevel: -1
    },
    pending: true,
    error: null
  }),
  [ActionTypes.FETCH_REGION_LEVELS + '_ERROR']: setError,
  [ActionTypes.FETCH_REGION_LEVELS + '_SUCCESS']: (state, { payload }) => ({
    ...initialState,
    regionLevels: payload.data,
    selectedValues: {
      ...state.selectedValues,
      regionLevel: payload.data[0].id
    }
  }),

  [ActionTypes.FETCH_REGIONS]: setPending,
  [ActionTypes.FETCH_REGIONS + '_ERROR']: setError,
  [ActionTypes.FETCH_REGIONS + '_SUCCESS']: (state, { payload }) => ({
    ...initialState,
    regionLevels: state.regionLevels,
    regions: payload.data,
    selectedValues: {
      ...state.selectedValues,
      region: payload.data[0].id,
      scenarioCollection: payload.data[0].scenarioCollections[0].id
    }
  }),

  [ActionTypes.FETCH_SCENARIOS]: setPending,
  [ActionTypes.FETCH_SCENARIOS + '_ERROR']: setError,
  [ActionTypes.FETCH_SCENARIOS + '_SUCCESS']: (state, { payload }) => ({
    data: payload.data[0],
    scenarios: payload.data[0].scenarios,
    indicatorCategories: payload.data[0].indicatorCategories,
    timePeriods: payload.data[0].timePeriods,
    error: null,
    pending: false,
    selectedValues: {
      ...state.selectedValues,
      timePeriod: payload.data[0].timePeriods[0].id,
      scenarios: [payload.data[0].scenarios[0].id],
      indicators: payload.data[0].indicatorCategories.filter(category => category.isMandatory === 1).map(mandatoryCategories => mandatoryCategories.indicators).map(indicator => indicator[0].id)
    }
  }),

  [ActionTypes.SELECT_REGION_LEVEL]: (state, { payload }) => ({
    selectedValues: {
      ...state.selectedValues,
      regionLevel: payload.id
    }
  }),

  [ActionTypes.SELECT_REGION]: (state, { payload }) => ({
    selectedValues: {
      ...state.selectedValues,
      region: payload.id,
      scenarioCollection: state.regions.find(region => region.id === payload.id).scenarioCollections[0].id
    }
  }),

  [ActionTypes.SELECT_SCENARIO_COLLECTION]: (state, { payload }) => ({
    selectedValues: {
      ...state.selectedValues,
      scenarioCollection: payload.id
    }
  }),

  [ActionTypes.SELECT_SCENARIOS]: (state, { payload }) => ({
    selectedValues: {
      ...state.selectedValues,
      scenarios: payload.ids
    }
  }),

  [ActionTypes.SELECT_INDICATORS]: (state, { payload }) => ({
    selectedValues: {
      ...state.selectedValues,
      indicators: payload.ids
    }
  }),

  [ActionTypes.SELECT_PERIOD]: (state, { payload }) => ({
    selectedValues: {
      ...state.selectedValues,
      timePeriod: payload.id
    }
  })
})

export default demoReducer
