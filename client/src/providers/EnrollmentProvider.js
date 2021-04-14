import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EnrollmentContext = React.createContext();
export const EnrollmentConsumer = EnrollmentContext.Consumer;

const ClassroomProvider = ({ children }) => {
  const [enrollments ,setEnrollments] = useState([])

  useEffect ( () => {
    axios.get(`/api/classrooms/${classroom_id}/enrollments`)
      .then( res => {
        setEnrollments(res.data)
      })
      .catch( err => console.log(err))
  }, [])
//  dont use UseEffect in the provider for enrollments, create a function for getting all enrollments and useEffect in the enrollment component
   const deleteEnrollment = (id, classroom_id) => {
    axios.delete(`/api/classrooms/${classroom_id}/enrollments/${id}`)
      .then( res => {
        setEnrollments(enrollments.filter((enrollment) => enrollment.id !== id))
      })
      .catch( err => console.log(err))
  }

  const addEnrollment = (enrollment, classroom_id) => {
    axios.post(`/api/classrooms/${id}/enrollments`, { enrollment })
    .then( res => {
      setEnrollments([...enrollment, res.data])
    })
    .catch( err => console.log(err))
  }
  
  return(
    <EnrollmentContext.Provider value={{
      enrollments,
      addEnrollment: addEnrollment,
      deleteEnrollment: deleteEnrollment,
      
    }}>
      { children }
    </EnrollmentContext.Provider>
  )
}

export default EnrollmentProvider
