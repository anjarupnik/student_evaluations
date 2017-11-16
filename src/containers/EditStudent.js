import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchOneStudent } from '../actions/students'
import Title from '../components/ui/Title'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateStudent } from '../actions/students'
import { push } from 'react-router-redux'
import Drawer from 'material-ui/Drawer';
import './RateForm.css'


  const dialogStyle = {
    width: '300px',
    margin: '30px',
    padding: '2rem',
  }

  const buttonStyle = {
    float: 'right',
    marginLeft: '2rem',
  }

class EditStudent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {open: true,
      value: ""};
  }

  componentWillMount() {
    const { student, fetchOneStudent } = this.props
    const { studentId } = this.props.match.params

    if (!student) { fetchOneStudent(studentId) }

  }

    state = {}

    submitForm(event) {
      event.preventDefault()
        const { student } = this.props
        const evaluation = {
         color: this.state.value,
         date: this.refs.date.getValue(),
         remark: this.refs.remark.getValue()
       }
        const updatedStudent = {
          name: this.refs.name.getValue(),
          photo: this.refs.photo.getValue(),
          evaluation: evaluation
      }
        console.log(updatedStudent)
        this.props.updateStudent(updatedStudent, student._id)
        this.props.push(`/students/${student._id}`)
      }

      handleChange = (value) => {
        this.setState({value: value})
        }

    render() {
    const  { student } = this.props
     if (!student) return null
      return (
        <div>
          <Drawer width={600} openSecondary={true} open={this.state.open}>
          <Paper style={ dialogStyle }>
          <Title content="Edit" level={2} />

          <form onSubmit={this.submitForm.bind(this)} ref="form">
            <div className="input">
              <h4>Full name: </h4>
              <TextField ref="name" type="text" defaultValue={student.name} />
            </div>
            <div className="input">
              <h4>Photo: </h4>
              <TextField ref="photo" type="text" placeholder='url' defaultValue={student.photo} />
            </div>
            <div className="input">
              <div className="colors" >
                <div className="green1" primaryText="Green" onClick={this.handleChange("green")}></div>
                <div className="yellow1" value={"yellow"} primaryText="Yellow" onClick={this.handleChange("yellow")}></div>
                <div className="red1" value={"red"} primaryText="Red" onClick={this.handleChange("red")}></div>
              </div>
            </div>
            <div className="input">
              <h4>Date: </h4>
              <TextField ref="date" type="date" placeholder='Date' defaultValue={student.evaluations[student.evaluations.length-1].date}/>
           </div>
          <div className="input">
            <h4>Remarks: </h4>
            <TextField ref="remark" type="text" placeholder='Remarks' defaultValue={student.evaluations[student.evaluations.length-1].remark}  multiLine={true}
              rows={2}
              rowsMax={4} />
          </div>
          </form>
        <RaisedButton
          style={ buttonStyle }
          onClick={ this.submitForm.bind(this) }
          label="Change"
          primary={true} />
      </Paper>
      </Drawer>
    </div>

      )
    }
  }


const mapStateToProps = ({ students }, { match }) => {
  const student = students.filter((s) => (s._id === match.params.studentId))[0]
  return {
    student
  }
}

  export default connect(mapStateToProps, { fetchOneStudent, updateStudent, push })(EditStudent)
