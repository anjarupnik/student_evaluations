import { expect } from 'chai'
import batches from './batches'
import { FETCHED_BATCHES} from '../actions/batches/fetch'

describe('batches reducer', () => {
  const reducer = classes
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })

  it(FETCHED_BATCHES, () => {
  const eventualState = ['1', '2', '3', '4']

  const fetchAction = {
    type: FETCHED_BATCHES,
    payload: eventualState
  }

  expect(reducer(initialState, fetchAction)).to.eql(eventualState)
})
})
