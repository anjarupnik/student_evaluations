import React, { PureComponent } from 'react'
import './PercentageBar.css'
import AppBar from 'material-ui/AppBar'

class PercentageBar extends PureComponent {
  render() {
    const { batch } = this.props
    return (
      <AppBar
      title={"Batch # " + batch.batchNumber}
      style={{backgroundColor: 'grey50'}}
      iconElementRight={
      <div className="colors" >
        <div className="green1" ></div>
        <h5 className="greenPerc">{Math.round(((batch.students.filter(student =>
          student.evaluations[student.evaluations.length-1].color === "green").length)/batch.students.length * 100)*100)/100 + "%"}</h5>
        <div className="yellow1" ></div>
        <h5 className="yellowPerc">{Math.round(((batch.students.filter(student =>
          student.evaluations[student.evaluations.length-1].color === "yellow").length)/batch.students.length * 100)*100)/100 + "%"}</h5>
        <div className="red1"></div>
        <h5 clasName="redPerc">{Math.round(((batch.students.filter(student =>
          student.evaluations[student.evaluations.length-1].color === "red").length)/batch.students.length * 100)*100)/100 + "%"}</h5>
      </div>}
      />
    )
  }
}


export default PercentageBar
