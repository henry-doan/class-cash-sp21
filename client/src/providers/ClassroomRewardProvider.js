import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ClassroomRewardContext = React.createContext();
export const ClassroomRewardConsumer = ClassroomRewardContext.Consumer

const ClassroomRewardProvider = ({ children }) => {
  const [classroomRewards, setClassroomRewards] = useState([])
  const [classroomReward, setClassroomReward] = useState([])

  useEffect( (classroom_id) => {
    axios.get(`/api/classrooms/${classroom_id}/classroom_rewards`)
      .then( res => {
        setClassroomRewards(res.data)
      })
      .catch( err => console.log(err))
  },[])

  const addClassroomReward = (classroom_id, classroom_reward) => {
    axios.post(`/api/classrooms/${classroom_id}/classroom_rewards`, {classroom_reward})
    .then(res => setClassroomRewards([...classroomRewards, res.data]))
    .catch( err => console.log(err))
  }

  const getClassroomReward = (classroom_id, id) => {
    axios.get(`/api/classrooms/${classroom_id}/classroom_rewards/${id}`)
      .then( res => setClassroomReward(res.data))
      .catch( err => console.log(err))
  }

  const deleteClassroomReward = (classroom_id, id) => {
    axios.delete(`/api/classrooms/${classroom_id}/classroom_rewards/${id}`)
      .then( res => {
        setClassroomRewards(classroomRewards.filter((classroomReward) => classroomReward.id !== id))
      })
      .catch( err => console.log(err))
  }

  const updateClassroomReward = (id, classroom_id, classroom_reward) => {
    axios.put(`/api/classrooms/${classroom_id}/classroom_rewards/${id}`, {classroom_reward})
      .then( res => {
        const updatedClassroomRewards = classroomRewards.map( r => {
          if(r.id === id){
            return res.data
          }
          return r
        })
        setClassroomRewards(updatedClassroomRewards)
      })
      .catch(err => console.log(err))
  }

  return(
    <ClassroomRewardContext.Provider value={{
      classroomRewards,
      addClassroomReward: addClassroomReward,
      deleteClassroomReward: deleteClassroomReward,
      updateClassroomReward: updateClassroomReward,
      getClassroomReward: getClassroomReward
    }}>
      {children}
    </ClassroomRewardContext.Provider>
  )
}

export default ClassroomRewardProvider