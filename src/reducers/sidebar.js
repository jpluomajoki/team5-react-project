import reduce from 'utils/reduce'
import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  data: {
    availableChoices: {
      regionLevels: [],
      placeholder: []
    },
    selectedChoices: {
      regionLevel: '',
      region: '',
      scenarioCollection: '',
      scenarios: [],
      period: '',
      indicators: []
    }
  },
  error: null,
  pending: false
}

const selectionsReducer = reduce(initialState, {
  [ActionTypes.SIDEBAR_FETCH_REGION_LEVELS]: () => ({
    error: null,
    pending: true
  }),
  [ActionTypes.SIDEBAR_FETCH_REGION_LEVELS + '_SUCCESS']: (state, { payload }) => ({
    data: {
      ...state.data,
      availableChoices: {
        ...state.data.availableChoices,
        regionLevels: payload.data.map(child => ({
          name: child.name,
          id: child.id
        }))
      }
    },
    error: null,
    pending: false
  }),
  [ActionTypes.SIDEBAR_FETCH_REGION_LEVELS + '_ERROR']: (state, { payload }) => ({
    error: payload.error,
    pending: false
  }),
  [ActionTypes.SIDEBAR_SELECT_REGION_LEVEL]: (state, { payload }) => ({
    data: {
      ...state.data,
      selectedChoices: {
        ...state.selectedChoices,
        regionLevel: payload.id
      }
    }
  })
})

export default selectionsReducer
