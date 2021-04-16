import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EnrollmentContext = React.createContext();
export const EnrollmentConsumer = EnrollmentContext.Consumer;

const EnrollmentProvider = ({ children }) => {
  const [enrollment, setEnrollment] = useState([])
  const [enrollments, setEnrollments] = useState([])

  // const getEnrollment = (classroomId) => {
  //   axios.get(`/api/classrooms/${classroomId}/dpls`)
  //     .then( res => setEnrollment(res.data) )
  //     .catch( err => console.log(err) )
  // }

  // useEffect ( () => {
  //   axios.get(`/api/classrooms/${classroom_id}/enrollments`)
  //     .then( res => {
  //       setEnrollments(res.data)
  //     })
  //     .catch( err => console.log(err))
  // }, [])
//  dont use UseEffect in the provider for enrollments, create a function for getting all enrollments and useEffect in the enrollment component
   const deleteEnrollment = (id, classroom_id) => {
    axios.delete(`/api/classrooms/${classroom_id}/enrollments/${id}`)
      .then( res => {
        setEnrollments(enrollments.filter((enrollment) => enrollment.id !== id))
      })
      .catch( err => console.log(err))
  }

  const addEnrollment = (classroom_id, enrollment) => {
    axios.post(`/api/classrooms/${classroom_id}/enrollments`, { enrollment })
    .then( res => {
      debugger
      setEnrollments([...enrollments, res.data])
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
