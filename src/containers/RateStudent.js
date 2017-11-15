import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchOneStudent } from '../actions/students'
import RateForm from './RateForm'
import './RateStudent.css'
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux'

const containerStyle = {
  width: '470px',
  margin: '20px',
  padding: '2rem',
}

class RateStudent extends PureComponent {

  componentWillMount() {
    const { student, fetchOneStudent } = this.props
    const { studentId } = this.props.match.params

    if (!student) { fetchOneStudent(studentId) }

  }

  editStudent = studentId => event => this.props.push(`/students/${studentId}/edit`)

  render() {
    const { student } = this.props
     if (!student) return null
    return(
      <div className="studentpage">
        <Card style={containerStyle}>
        <CardMedia
          overlay={<CardTitle title={student.name}/>}
          >
        <div className="colors">
           {student.evaluations.map(e =>
            <div className={e.color}></div>)}
        </div>
          <img src={student.photo} alt="student" />
            </CardMedia>
            <CardActions>
              <FlatButton label="Edit" onClick={this.editStudent(student._id)} />
              <FlatButton label="Delete" />
            </CardActions>
        </Card>
        <div>
          <RateForm studentId={student._id} batchId={student.batchId}/>
        </div>
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

  export default connect(mapStateToProps, { fetchOneStudent, push })(RateStudent)
