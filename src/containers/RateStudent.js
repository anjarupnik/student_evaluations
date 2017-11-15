import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneStudent } from '../actions/students'

const evaluationShape = PropTypes.shape({
  color: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  remark: PropTypes.string.isRequired
})

class RateStudent extends PureComponent {
  static propTypes = {
    fetchOneStudent: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    batchId: PropTypes.string.isRequired,
    evaluations: PropTypes.arrayOf(evaluationShape)
  }

  componentWillMount() {
    const { student, fetchOneStudent } = this.props
    const { studentId } = this.props.match.params

     this.props.fetchOneStudent(studentId)

  }

  render() {
    const { student } = this.props

    return(
      <div>
        <img src={student.photo} alt="student"/>
        <h4>{student.name}</h4>
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
