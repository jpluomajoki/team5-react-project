import reduce from 'utils/reduce'
import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  data: {
    availableChoices: {
      regionLevels: [],
      regions: [],
      placeholder: [],
      scenarios: []
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
          id: child.id,
          description: child.description
        }))
      },
      selectedChoices: {
        ...state.data.selectedChoices,
        regionLevel: payload.data[0].id
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
        ...state.data.selectedChoices,
        regionLevel: payload.id
      }
    }
  }),
  [ActionTypes.SIDEBAR_FETCH_REGIONS]: () => ({
    error: null,
    pending: true
  }),
  [ActionTypes.SIDEBAR_FETCH_REGIONS + '_SUCCESS']: (state, { payload }) => ({
    data: {
      ...state.data,
      availableChoices: {
        ...state.data.availableChoices,
        regions: payload.data.map(child => ({
          name: child.name,
          id: child.id,
          scenarioCollections: child.scenarioCollections
        }))
      },
      selectedChoices: {
        ...state.data.selectedChoices,
        region: payload.data[0].id,
        scenarioCollection: payload.data[0].scenarioCollections[0].id
      }
    },
    error: null,
    pending: false
  }),
  [ActionTypes.SIDEBAR_FETCH_REGIONS + '_ERROR']: (state, { payload }) => ({
    error: payload.error,
    pending: false
  }),
  [ActionTypes.SIDEBAR_SELECT_REGION]: (state, { payload }) => ({
    data: {
      ...state.data,
      selectedChoices: {
        ...state.data.selectedChoices,
        region: payload.id
      }
    }
  }),
  [ActionTypes.SIDEBAR_SELECT_SCENARIO_COLLECTION]: (state, { payload }) => ({
    data: {
      ...state.data,
      selectedChoices: {
        ...state.data.selectedChoices,
        scenarioCollection: payload.id
      }
    }
  }),
  [ActionTypes.SIDEBAR_SELECT_SCENARIOS]: (state, { payload }) => ({
    data: {
      ...state.data,
      selectedChoices: {
        ...state.data.selectedChoices,
        scenarios: payload.ids
      }
    }
  }),
  [ActionTypes.SIDEBAR_FETCH_SCENARIOS]: () => ({
    error: null,
    pending: true
  }),
  [ActionTypes.SIDEBAR_FETCH_SCENARIOS + '_SUCCESS']: (state, { payload }) => ({
    data: {
      ...state.data,
      availableChoices: {
        ...state.data.availableChoices,
        scenarios: payload.data[0].scenarios,
        indicatorCategories: payload.data[0].indicatorCategories,
        timePeriods: payload.data[0].timePeriods
      },
      selectedChoices: {
        ...state.data.selectedChoices,
        scenarios: payload.data[0].id
      }
    },
    error: null,
    pending: false
  }),
  [ActionTypes.SIDEBAR_FETCH_SCENARIOS + '_ERROR']: (state, { payload }) => ({
    error: payload.error,
    pending: false
  }),
  [ActionTypes.SIDEBAR_SELECT_INDICATORS]: (state, { payload }) => ({
    data: {
      ...state.data,
      selectedChoices: {
        ...state.data.selectedChoices,
        indicators: payload.ids
      }
    }
  }),
  [ActionTypes.SIDEBAR_SELECT_PERIOD]: (state, { payload }) => ({
    data: {
      ...state.data,
      selectedChoices: {
        ...state.data.selectedChoices,
        period: payload.id
      }
    }
  })
})

export default selectionsReducer
