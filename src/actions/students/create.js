import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const CREATE_STUDENT = 'CREATE_STUDENT'

const api = new API()

export default (student, batchId) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

  api.put(`/batches/${batchId}/students`, student)
    .then((result) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })

      dispatch({
        type: CREATE_STUDENT,
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
