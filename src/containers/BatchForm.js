import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createBatch } from '../actions/batches'
import PropTypes from 'prop-types'
import Title from '../components/ui/Title'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const dialogStyle = {
  width: '300px',
  margin: '30px',
  padding: '2rem',
}

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

export class BatchForm extends PureComponent {
  static propTypes = { createBatch: PropTypes.func.isRequired }

  state = {}

  submitForm(event) {
    event.preventDefault()
      const batch = {
        batchNumber: this.refs.batchNumber.getValue(),
        startDate: this.refs.startDate.getValue(),
        endDate: this.refs.endDate.getValue()
      }
      this.props.createBatch(batch)
      this.refs.form.reset()
    }

  render() {
    return (
      <Paper style={ dialogStyle }>
        <Title content="Add New Batch" level={2} />

        <form onSubmit={this.submitForm.bind(this)} ref="form">
          <div className="input">
            <TextField ref="batchNumber" type="number" placeholder="Batch Number #" id="batchNumber"/>
          </div>
          <div className="input">
            <h4>Start Date: </h4>
            <TextField ref="startDate" type="date" id="startDate"  />
          </div>
          <div className="input">
            <h4>End Date: </h4>
            <TextField ref="endDate" type="date"  id="endDate" />
          </div>
        </form>
        <RaisedButton
          style={ buttonStyle }
          onClick={ this.submitForm.bind(this) }
          label="Add"
          primary={true} />
      </Paper>
    )
  }
}

const mapStateToProps = ({ batch }) => ({ batch })

export default connect(mapStateToProps, { createBatch })(BatchForm)
