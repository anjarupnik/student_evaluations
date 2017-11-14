import { expect } from 'chai'
import classes from './classes'
import { FETCHED_CLASSES } from '../actions/classes/fetch'

describe('classes reducer', () => {
  const reducer = classes
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })

  it(FETCHED_CLASSES, () => {
  const eventualState = ['1', '2', '3', '4']

  const fetchAction = {
    type: FETCHED_CLASSES,
    payload: eventualState
  }

  expect(reducer(initialState, fetchAction)).to.eql(eventualState)
})
})
