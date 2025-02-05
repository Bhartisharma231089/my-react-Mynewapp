import React from 'react'
import PropTypes from 'prop-types'


function Student({text,bgColor,textColor}) {
  const StudentStyles={
    backgroundColor: bgColor,
    color:textColor,
  }
    const name='Devika'
    const rollno='123'
    const marks='80'

  return (
    <Student style={StudentStyles}>
    <div className='container'>
        <h3>Entered Information</h3>
      <p>Name: {name}</p>
      <p>Roll No: {rollno}</p>
      <p>Marks: {marks}</p>
      
    </div>
   </Student>
  )
}
Student.defaultProps={
  text:'Student Info',
  bgColor:'rgba(0,0,0,5)',
  textColor:'yellow',

}
Student.PropTypes={
  text:PropTypes.string,
  bgColor:PropTypes.string,
  textColor:PropTypes.string,

}
export default Student
