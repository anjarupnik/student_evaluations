import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
import API from '../../api/client'
export const FETCHED_CLASSES = 'FETCHED_CLASSES'

const api = new API()

export default () => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

  api.get('/batches')
    .then((result) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })

      dispatch({
        type: FETCHED_CLASSES,
        payload: result.body
      })
    })
    .catch((error) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({
        type: LOAD_ERROR,
        payload: error.message
      })
    })
  }
}
