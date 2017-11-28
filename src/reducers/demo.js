import reduce from 'utils/reduce'
import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  data: null,
  error: null,
  pending: false
}

const demoReducer = reduce(initialState, {
  [ActionTypes.DEMO_FETCH]: () => ({
    data: null,
    error: null,
    pending: true
  }),
  [ActionTypes.DEMO_FETCH + '_SUCCESS']: (state, { payload }) => ({
    data: payload.data,
    error: null,
    pending: false
  }),
  [ActionTypes.DEMO_FETCH + '_ERROR']: (state, { payload }) => ({
    error: payload.error,
    pending: false
  })
})

export default demoReducer
