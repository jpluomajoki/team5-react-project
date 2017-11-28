import * as ActionTypes from 'constants/ActionTypes'

export const demoFetch = () => ({
  type: ActionTypes.DEMO_FETCH,
  payload: {
    request: {
      url: '/posts/1',
      method: 'GET'
    }
  }
})

// NOTE: Demo actions are the same as
// export const demoFetch = () => (dispatch) => {
//   return dispatch({
//     type: ActionTypes.DEMO_FETCH,
//     payload: {
//       request: {
//         url: '/posts/1',
//         method: 'GET'
//       }
//     }
//   })
// }
