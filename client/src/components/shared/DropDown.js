import React, {useState} from 'react'
import { Dropdown } from 'semantic-ui-react'
import UserEnrollmentsList from '../classrooms/UserEnrollmentsList';
const options = [
  <UserEnrollmentsList />,
]

const DropDown = () => {
  const [classroom, setClassroom] = useState([])
  return(
  <Dropdown 
    className='button icon'
    floating
    placeholder='Classroom'
    options={options}
  />
  )
}

export default DropDown;