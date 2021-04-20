import { useState, useEffect } from 'react'
import axios from 'axios'
import ClassroomReward from './ClassroomReward'
import { Card } from 'semantic-ui-react'

const ClassroomRewards = ({classroomId, enrollmentId}) => {
  const [classroomRewards, setClassroomRewards] = useState([])

  useEffect ( () => {
    axios.get(`/api/classroomRewards/${classroomId}`)
      .then( res => {
        setClassroomRewards(res.data)
      })
      .catch( err => console.log(err))
  },[])

  const renderClassroomRewards = () => {
    return classroomRewards.map( c => (
      // <ClassroomReward c={c}/>
      <p>{c.name}</p>
    ))
  }
  return(
    <>
      {renderClassroomRewards()}
    </>
  )
}

export default ClassroomRewards