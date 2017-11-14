import React, { PureComponent } from 'react'
import { fetchClasses } from '../actions/classes'
import { connect } from 'react-redux'
import Title from '../components/ui/Title'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import SignIn from './SignIn'
import PropTypes from 'prop-types'

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

export class ClassesContainer extends PureComponent {
  static propTypes = {
  signedIn: PropTypes.bool,
}
  componentWillMount() {
    this.props.fetchClasses()
  }

  render() {
    if (!this.props.signedIn) return <SignIn />

    return(
      <div style={styles.root}>
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
const mapDispatchToProps = { fetchClasses }

export default connect(mapStateToProps, mapDispatchToProps)(ClassesContainer)
