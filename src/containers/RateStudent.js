import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchOneStudent } from '../actions/students'
import RateForm from './RateForm'
import './RateStudent.css'
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
              <FlatButton label="Edit" />
              <FlatButton label="Delete" />
            </CardActions>
        </Card>
        <div>
          <RateForm studentId={student._id}/>
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

  export default connect(mapStateToProps, { fetchOneStudent })(RateStudent)
