import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassroomContext = React.createContext();
export const ClassroomConsumer = ClassroomContext.Consumer;

const ClassroomProvider = ({ children }) => {
  const [classrooms ,setClassrooms] = useState([])

  useEffect ( () => {
    axios.get('/api/classrooms')
      .then( res => {
        setClassrooms(res.data)
      })
      .catch( err => console.log(err))
  }, [])

   const deleteClassroom = (id) => {
    axios.delete(`/api/classrooms/${id}`)
      .then( res => {
        setClassrooms(classrooms.filter((classroom) => classroom.id !== id))
      })
      .catch( err => console.log(err))
  }
  
  return(
    <ClassroomContext.Provider value={{
      ...classrooms,
      deleteClassroom
    }}>
      { children }
    </ClassroomContext.Provider>
  )

}

export default ClassroomProvider