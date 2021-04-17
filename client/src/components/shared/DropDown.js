import React, {useState} from 'react'
import { Dropdown } from 'semantic-ui-react'
import DropDownList from '../classrooms/DropDownList';
const options = [
  <DropDownList />,
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