import { FETCHED_CLASSES } from '../actions/classes'

export default (currentState = [], { type, payload } = {}) => {
  switch(type) {
    case  FETCHED_CLASSES:
      return [ ...payload ]

    default :
      return currentState
  }
}
