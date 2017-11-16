import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneBatch } from '../actions/batches/fetch'
import {GridList, GridTile} from 'material-ui/GridList';
import StudentForm from './StudentForm'
import { push } from 'react-router-redux'
import './Batch.css'
import { askQuestion } from '../actions/batches'
import RaisedButton from 'material-ui/RaisedButton'
import PercentageBar from '../components/PercentageBar'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginLeft: '0px',
  },
  gridList: {
    width: 600,
    height: 450,
    marginTop: '10px',
  },
};

const studentShape = PropTypes.shape({
  evaluations: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  batchId: PropTypes.string.isRequired
})

class Batch extends PureComponent {
  static propTypes = {
    fetchOneBatch: PropTypes.func.isRequired,
    batch: PropTypes.shape({
      batchNumber: PropTypes.number,
      students: PropTypes.arrayOf(studentShape),
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      questions: PropTypes.array,
      questionsDate: PropTypes.string,
      })
  }

  componentWillMount() {
    const { batchId } = this.props.match.params

   this.props.fetchOneBatch(batchId)

  }

   goToStudent = studentId => event => this.props.push(`/students/${studentId}`)

   askQuestion() {
     const { batch } = this.props
     this.props.askQuestion(batch)
   }


  render() {
    const { batch } = this.props
    if (!batch) return null
    return(
      <div style={styles.root}>
        <PercentageBar batch={batch}/>
      <div>
      </div>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
         {batch.students.map((student) => (
            <GridTile
              cols='1'
              key={student._id}
              title={student.name}
              onClick={this.goToStudent(student._id)}
              actionIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
               <circle fill={student.evaluations[student.evaluations.length-1].color} cx="12" cy="12" r="8"/></svg>}
            >
              <img className="studentImage" src={student.photo} alt="student"  onClick={this.goToStudent(student._id)}/>
        </GridTile>
    ))}
  </GridList>
  <div>
    <StudentForm batchId= { batch._id}/>
    <RaisedButton
      label="Ask Question"
      className="askQuestion"
      primary={true}
      onClick={ this.askQuestion.bind(this)}
      icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
       viewBox="0 0 24 24"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>} />
  </div>
</div>
    )
  }
}

  const mapStateToProps = ({ batches }, { match }) => {
    const batch = batches.filter((b) => (b._id === match.params.batchId))[0]
    return {
      batch
    }
  }

  export default connect(mapStateToProps, { fetchOneBatch, askQuestion, push })(Batch)
