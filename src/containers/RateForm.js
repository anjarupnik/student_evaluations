import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { rateStudent } from '../actions/students'
import PropTypes from 'prop-types'
import Title from '../components/ui/Title'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { push } from 'react-router-redux'
import './RateForm.css'

const dialogStyle = {
  width: '400px',
  margin: '30px',
  padding: '2rem',
}

const button1 = {
  float: 'left',
}
const buttonStyle = {
  float: 'right',
}

class RateForm extends PureComponent {
  static propTypes = {
    rateStudent: PropTypes.func.isRequired,
    studentId: PropTypes.string,
    color: PropTypes.string
  }

  state = {}

  submitForm(event) {
    event.preventDefault()
      const { studentId, batchId } = this.props
      const evaluation = {
        color: this.state.value,
        date: this.refs.date.getValue(),
        remark: this.refs.remark.getValue()
      }
      this.props.rateStudent(evaluation, studentId, batchId)
      this.props.push(`/batches/${batchId}`)
    }

    submitNext(event) {
      event.preventDefault()
        const { studentId } = this.props
         const evaluation = {
          color: this.state.value,
          date: this.refs.date.getValue(),
          remark: this.refs.remark.getValue()
        }
        console.log(this.state.value)
        this.props.rateStudent(evaluation, studentId)
        this.props.push(`/students/${studentId}`)
      }



  handleChange = (event, index, value) => {
    this.setState({value})
    }

  render() {
    return (
      <Paper style={ dialogStyle }>
        <Title content="Rate Student" level={2} />

        <form onSubmit={this.submitForm.bind(this)} ref="form">
        <div className="input">
          <DropDownMenu ref="color" value={this.state.value} onChange={this.handleChange}>
               <MenuItem value={"green"} primaryText="Green" />
               <MenuItem value={"yellow"} primaryText="Yellow" />
               <MenuItem value={"red"} primaryText="Red" />
         </DropDownMenu>
        </div>

          <div className="input">
            <h4>Date: </h4>
            <TextField ref="date" type="date" placeholder='Date' defaultValue={new Date().toISOString().substr(0, 10)} />
         </div>
        <div className="input">
          <h4>Remarks: </h4>
          <TextField ref="remark" type="text" placeholder='Remarks'  multiLine={true}
            rows={2}
            rowsMax={4} />
        </div>
        </form>
        <RaisedButton
          style={ button1 }
          onClick={ this.submitNext.bind(this) }
          label="Save and next"
          primary={true}/>
        <RaisedButton
          style={ buttonStyle }
          onClick={ this.submitForm.bind(this) }
          label="Save"
          primary={true} />
      </Paper>
    )
  }
}

const mapStateToProps = ({ student }) => ({ student })

export default connect(mapStateToProps, { rateStudent, push })(RateForm)
