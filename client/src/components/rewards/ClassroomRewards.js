import { useState, useEffect } from 'react'
import axios from 'axios'
import ClassroomReward from './ClassroomReward'
import { Card } from 'semantic-ui-react'
import ClassroomRewardConsumer from '../../providers/ClassroomRewardProvider'

const ClassroomRewards = ({classroomId, enrollmentId}) => {
  const [classroomRewards, setClassroomRewards] = useState([])

  useEffect( (classroom_id) => {
    axios.get(`/api/classrooms/${classroomId}/classroomrewards`)
      .then( res => {
        setClassroomRewards(res.data)
      })
      .catch( err => console.log(err))
  },[])


  const renderClassroomRewards = () => {
    return classroomRewards.map( c => (
      <ClassroomReward 
        c={c}
        enrollmentId={enrollmentId}
        classroomId={classroomId}
      />
    ))
  }
  return(
    <>
      {renderClassroomRewards()}
    </>
  )
}

const ConnectedClassroomRewards = (props) =>(
  <ClassroomRewardConsumer>
    {
      value => (
        <ClassroomRewards {...props} {...value} />
      )
    }
  </ClassroomRewardConsumer>
)

export default ClassroomRewards