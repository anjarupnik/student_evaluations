import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneBatch } from '../actions/batches/fetch'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import StudentForm from './StudentForm'
import { push } from 'react-router-redux'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 600,
    height: 450,
    overflowY: 'auto',
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
    const { batch, fetchOneBatch } = this.props
    const { batchId } = this.props.match.params

   this.props.fetchOneBatch(batchId)

  }

   goToStudent = studentId => event => this.props.push(`/students/${studentId}`)

  render() {
    const { batch } = this.props
    if (!batch) return null
    return(
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>Batch #{batch.batchNumber}</Subheader>
          {batch.students.map((student) => (
            <GridTile
              key={student._id}
              title={student.name}
              actionIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle fill="#7FFF00" cx="12" cy="12" r="8"/></svg>}
            >
              <img src={student.photo} alt="student"  onClick={this.goToStudent(student._id)}/>
      </GridTile>
    ))}
  </GridList>
  <StudentForm batchId= { batch._id}/>
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

  export default connect(mapStateToProps, { fetchOneBatch, push })(Batch)
