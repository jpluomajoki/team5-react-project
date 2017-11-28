export default function createReducer (initialState, actions) {
  return function reducer (state = initialState, action) {
    const reduce = actions[action.type]

    if (!reduce) {
      return state
    }

    return {
      ...state,
      ...reduce(state, action)
    }
  }
}
