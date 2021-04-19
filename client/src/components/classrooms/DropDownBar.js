import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react'
import DropDownList from './DropDownList';
import DropDownClassroom from './DropDownClassroom'
import { ClassroomConsumer } from '../../providers/ClassroomProvider';
import { useParams } from 'react-router-dom';
const options = [
  <DropDownList />,
]


const DropDownBar = () => {

  // const [classroom, setClassroom] = useState([])
  // const [getUserClassroom, setGetUserClassroom] = useState([])
  // useEffect( () => {
  //   axios.get(`/api/userClassroom/${id}`)
  //     .then( res => setGetUserClassroom(res.data))
  //     .catch( err => console.log(err))
  // }, [])

    
   
  
    // const getUserClassroom = (id, classroom) => {
    //   axios.get(`/api/userClassroom/${id}`, {classroom})
    //     .then( res => setClassroom(res.data) )
    //     .catch( err => console.log(err))
    // }

  return(
  <Dropdown 
    className='button icon'
    floating
    // key={classroom.id}
    placeholder= "Classrooms"//{classroom.name}
    options={options}
  />
  )
}

const ConnectedDropDownBar = (props) => (
  <ClassroomConsumer>
    { value => (
      <DropDownBar {...props} {...value} />
    )}
  </ClassroomConsumer>
)

export default ConnectedDropDownBar;