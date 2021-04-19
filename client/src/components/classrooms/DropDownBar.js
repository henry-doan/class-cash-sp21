import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react'
import DropDownList from './DropDownList';
import DropDownClassroom from './DropDownClassroom'

const options = [
  <DropDownList />,
]


const DropDownBar = ({classroom}) => {
//   const [classroom, setClassroom] = useState([])
  
//  useEffect( () => {
//   axios.get(`/api/classrooms/${e.classroom_id}`)
//     .then( res => setClassroom(res.data))
//     .catch( err => console.log(err))
// }, [])

  return(
  <Dropdown 
    className='button icon'
    floating
    key={classroom?.id}
    placeholder={classroom?.name}
    options={options}
  />
  )
}

export default DropDownBar;