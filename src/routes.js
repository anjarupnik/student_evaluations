import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  BatchesContainer,
  SignIn,
  SignUp,
  Batch,
  RateStudent
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
       <Route exact path="/"  component={BatchesContainer} />
       <Route path="/batches/:batchId" component={Batch} />
       <Route path="/students/:studentId" component={RateStudent} />
       <Route path="/sign-in" component={SignIn} />
       <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
