import ClassroomList from '../classrooms/ClassroomList'
import React, { useState } from 'react'
import Dashboard from './Dashboard'


const ClassroomSelect = () => {
  const [isSelectingClassroom, setIsSelectingClassroom] = useState(false)

const handleClick = () => {
  setIsSelectingClassroom(!isSelectingClassroom)
}

return (
  <>
    <button onClick={handleClick}>Change Classroom</button> 
    {isSelectingClassroom ? <ClassroomList /> : <MyClassroomHeader />}
    <h1>my rewards</h1>
    <h1>activities</h1>
  </>
  )
}
export default ClassroomSelect;



const MyClassroomHeader = () => (
  <Dashboard />
)
