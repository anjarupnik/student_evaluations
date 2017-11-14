import React, { PureComponent } from 'react'
import { fetchBatches } from '../actions/batches'
import { connect } from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import SignIn from './SignIn'
import PropTypes from 'prop-types'
import BatchForm from './BatchForm'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class BatchesContainer extends PureComponent {
  static propTypes = {
  signedIn: PropTypes.bool,
}
  componentWillMount() {
    this.props.fetchBatches()
  }

  render() {
    if (!this.props.signedIn) return <SignIn />

    return(
      <div style={styles.root}>
      <BatchForm />
        <GridList
         cellHeight={180}
         style={styles.gridList}
        >
     <Subheader>All Classes</Subheader>
     {this.props.batches.map((batch) => (
       <GridTile
         key={batch._id}
         title={batch.batchNumber}
         subtitle={<span>{batch.startDate}</span>}
        >
       </GridTile>
     ))}
   </GridList>
 </div>
    )
  }
}

const mapStateToProps = ({ batches, currentUser }) => ({ batches, signedIn: !!currentUser && !!currentUser._id, })
const mapDispatchToProps = { fetchBatches }

export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer)
