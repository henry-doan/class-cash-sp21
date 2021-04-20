import React, { useState, useEffect } from 'react'
import axios from 'axios';

const RewardContext = React.createContext();
export const RewardConsumer = RewardContext.Consumer

const RewardProvider = ({ children }) => {
  const [rewards, setRewards] = useState([])
  const [reward, setReward] = useState([])

  useEffect( (enrollment_id) => {
    axios.get(`/api/enrollments/${enrollment_id}/rewards`)
      .then( res => {
        setRewards(res.data)
      })
      .catch( err => console.log(err))
  },[])

  const addReward = (enrollment_id, reward) => {
    axios.post(`/api/enrollments/${enrollment_id}/rewards`, {reward})
    .then(res => setRewards([...rewards, res.data]))
    .catch( err => console.log(err))
  }

  const getReward = (enrollment_id, id) => {
    axios.get(`/api/enrollments/${enrollment_id}/rewards/${id}`)
      .then( res => setReward(res.data))
      .catch( err => console.log(err))
  }

  const deleteReward = (enrollment_id, id) => {
    axios.delete(`/api/enrollments/${enrollment_id}/rewards/${id}`)
      .then( res => {
        setRewards(rewards.filter((reward) => reward.id !== id))
      })
      .catch( err => console.log(err))
  }

  const updateReward = (id, enrollment_id, reward) => {
    axios.put(`/api/enrollments/${enrollment_id}/rewards/${id}`, {reward})
      .then( res => {
        const updatedRewards = rewards.map( r => {
          if(r.id === id){
            return res.data
          }
          return r
        })
        setRewards(updatedRewards)
      })
      .catch(err => console.log(err))
  }

  return(
    <RewardContext.Provider value={{
      rewards,
      addReward: addReward,
      deleteReward: deleteReward,
      updateReward: updateReward,
      getReward: getReward
    }}>
      {children}
    </RewardContext.Provider>
  )
}

export default RewardProvider