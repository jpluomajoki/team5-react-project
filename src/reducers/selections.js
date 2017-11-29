const initialState = {
  choices: {
    regionLevels: []
  },
  regionLevel: '',
  region: '',
  scenarioCollection: '',
  scenarios: [],
  period: '',
  indicators: [],
  graphType: ''
}

const selectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REGION_LEVELS_SUCCESS':
      return {
        choices: {
          ...state.choices,
          regionLevels: action.payload.data.map(child => ({
            name: child.name,
            id: child.id
          }))
        }
      }
    default:
      return state
  }
}

export default selectionsReducer
