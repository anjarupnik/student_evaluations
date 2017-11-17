import { expect } from 'chai'
import batches from './batches'
import { FETCHED_BATCHES, CREATE_BATCH } from '../actions/batches'

describe('batches reducer', () => {
  const reducer = batches
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

 it(CREATE_BATCH, () => {
 const initialState = ['1', '2', '3', '4']
 const batch = '5'
 const eventualState = [{0 : '5'}, '1', '2', '3', '4']

 const createAction = {
   type: CREATE_BATCH,
   payload: batch
 }

 expect(reducer(initialState, createAction)).to.eql(eventualState)
 })
})
