import { FETCHED_BATCHES } from '../actions/batches'
import { CREATE_BATCH } from '../actions/batches'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case  FETCHED_BATCHES:
      return [ ...payload ]

    case CREATE_BATCH :
     const newBatch = { ...payload }
     return [newBatch].concat(state)

    default :
      return state
  }
}
