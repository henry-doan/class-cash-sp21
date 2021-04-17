import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PointContext = React.createContext();
export const PointConsumer = PointContext.Consumer;

const PointProvider = ({ children }) => {
  const [point, setPoint] = useState([])
  const [points, setPoints] = useState([])

  useEffect ( () => {
    axios.get(`/api/enrollments/${enrollment_id}/points`)
      .then( res => {
        setPoints(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const getPoint = (enrollment_id, id) => {
    axios.get(`/api/enrollments/${enrollment_id}/points/${id}`)
    .then( res => setPoint(res.data) )
    .catch( err => console.log(err) )
  }

  const deletePoint = (enrollment_id, id) => {
    axios.delete(`/api/enrollments/${enrollment_id}/points/${id}`)
      .then( res => {
        setPoints(points.filter((point) => point.id !== id))
      })
      .catch( err => console.log(err))
  }

  const updatePoint = (id, enrollment_id, point) => {
    axios.put(`/api/enrollments/${enrollment_id}/points/${id}`, {point})
    .then( res => {
      const updatedPoints = points.map( p => {
        if(p.id === id){
          return res.data
        }
        return p
      })
      setPoints(updatedPoints)
    })
    .catch(err => console.log(err))
  } 

  return(
    <PointContext.Provider value={{
      points,
      deletePoint: deletePoint,
      updatePoint: updatePoint,
      getPoint: getPoint
    }}>
      { children }
    </PointContext.Provider>
  )
}
export default PointProvider;