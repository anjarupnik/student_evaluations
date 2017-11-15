import React, { PureComponent } from 'react'
import { fetchBatches } from '../actions/batches'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import {GridList, GridTile} from 'material-ui/GridList';
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
    width: 800,
    height: 450,
  },
};

class BatchesContainer extends PureComponent {
  static propTypes = {
  signedIn: PropTypes.bool,
}
  componentWillMount() {
    this.props.fetchBatches()
  }

 goToBatch = batchId => event => this.props.push(`/batches/${batchId}`)

  render() {
    if (!this.props.signedIn) return <SignIn />

    return(
      <div style={styles.root}>
        <GridList
         cellHeight={100}
         style={styles.gridList}
        >
     <Subheader>All Classes</Subheader>
     {this.props.batches.map((batch) => (
       <GridTile
         key={batch._id}
         title= {"Batch  #" + batch.batchNumber}
         subtitle={<span>{batch.startDate + " ~ " + batch.endDate}</span>}
         onClick={this.goToBatch(batch._id)}
        >
       </GridTile>
     ))}
   </GridList>
   <BatchForm />
 </div>
    )
  }
}

const mapStateToProps = ({ batches, currentUser }) => ({ batches, signedIn: !!currentUser && !!currentUser._id, })
const mapDispatchToProps = { fetchBatches, push }

export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer)
