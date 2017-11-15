import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
import { fetchOneBatch } from '../batches/fetch'
export const CREATE_STUDENT = 'CREATE_STUDENT'

const api = new API()

export default (student, batchId) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

  api.post(`/batches/${batchId}/students`, student)
    .then((result) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })
      dispatch(fetchOneBatch(batchId))

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
