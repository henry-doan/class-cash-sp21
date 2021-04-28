import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react'
import DropDownList from './DropDownList';
import DropDownClassroom from './DropDownClassroom'
import { AuthConsumer } from '../../providers/AuthProvider';
import { withRouter} from 'react-router-dom';
import { Bar, MyDropdownMenu } from '../../styledComponents/SharedStyles';


const options = [
  <DropDownList />,
]


const DropDownBar = ({match}) => {

  const [classroom, setClassroom] = useState({})
  // const [getUserClassroom, setGetUserClassroom] = useState([])
  // useEffect( () => {
    
  //   axios.get(`/api/classrooms/${location.pathname.split("/").pop()}`)
  //     .then( res => setClassroom(res.data))
  //     .catch( err => console.log(err))
  // }, [])

  // const renderUserEnrollments = () => {
  //   return userEnrollments.map( e => (
  //     <DropDownClassroom e={e}/>
  //   ))
  // }
    
  //  const fillDropDown = (classrooms) => {
  //    return classrooms.map(, (name, id) => ({
      
  //   }))
  //  }
  
    // useEffect = (id, classroom) => {
    //   axios.get(`/api/userClassroom/${id}`, {classroom})
    //     .then( res => setClassroom(res.data) )
    //     .catch( err => console.log(err))
    // }

  if (classroom.name !== undefined){
    return(
    <Bar 
      // key={fillDropDown}
      className='button icon'
      compact
      placeholder= {classroom.name}
      options= {options}
      scrolling 
      floating
      icon=''
      text= {classroom.name}
      />
    )
  } else {
    return(
      <Bar 
      // key={fillDropDown}
      className='button icon'
      compact
      placeholder= 'Choose Classroom'
      options= {options}
      scrolling 
      floating
      icon=''
      text='Choose Classroom'
      />
    )
  }

}

const ConnectedDropDownBar = (props) => (
  <AuthConsumer>
    { value => (
      <DropDownBar {...props} {...value} />
    )}
  </AuthConsumer>
)

export default withRouter(ConnectedDropDownBar);