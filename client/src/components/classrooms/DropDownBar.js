import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react'
import DropDownList from './DropDownList';
import DropDownClassroom from './DropDownClassroom'

const options = [
  <DropDownList />,
]


const DropDownBar = () => {
  

 

  return(
  <Dropdown 
    className='button icon'
    floating
    placeholder="Classrooms"
    options={options}
  />
  )
}

export default DropDownBar;