import ClassroomList from './ClassroomList'
import React, { useState } from 'react'

const ClassroomSelect = () => {
  const [isSelectingClassroom, setIsSelectingClassroom] = useState(false)

const handleClick = () => {
  setIsSelectingClassroom(!isSelectingClassroom)
}

return (
  <>
    <button onClick={handleClick}>Swap State</button>
    {isSelectingClassroom ? <ClassroomList /> : <MyClassroomHeader />}
    <h1>my rewards</h1>
    <h1>activities</h1>
  </>
  )
}
export default ClassroomSelect;

const MyClassroomHeader = () => (
  <h1>DASHBOARD HERE</h1>
)