import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Navigation from './components/ui/Navigation'

chai.use(chaiEnzyme())

describe('<App />', () => {
  const app = shallow(<App />)

  it('contains navigation', () => {
    expect(app).to.have.descendants(Navigation)
  })
})
