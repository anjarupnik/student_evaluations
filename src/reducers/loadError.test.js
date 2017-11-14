import { expect } from 'chai'
import loadError from './loadError'
import { LOAD_ERROR, LOAD_SUCCESS, CLEAR_LOAD_ERROR } from '../actions/loading'

describe('loadError reducer', () => {
  const reducer = loadError
  const initialState = null

  it('returns false for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })

  it(LOAD_ERROR, () => {
  const eventualState = 'error'

  const loadError = {
    type: LOAD_ERROR,
    payload: eventualState
  }

  expect(reducer(initialState, loadError)).to.eql(eventualState)
})


  it(LOAD_SUCCESS, () => {
  const eventualState = null

  const loadError = {
    type: LOAD_SUCCESS,
    payload: eventualState
  }

  expect(reducer(initialState, loadError)).to.eql(eventualState)
})

  it(CLEAR_LOAD_ERROR, () => {
  const eventualState = null

  const loadError = {
    type: CLEAR_LOAD_ERROR,
    payload: eventualState
  }

  expect(reducer(initialState, loadError)).to.eql(eventualState)
  })
})
