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

  const addClassroom = (classroom) => {
    axios.post('/api/classrooms', { classroom })
    .then( res => {
      setClassrooms([...classrooms, res.data])
    })
    .catch( err => console.log(err))
  }

  const updateClassroom = (id, classroom) => {
    axios.put(`/api/classrooms/${id}`, {classroom})
    .then( res => {
      const updatedClassrooms = classrooms.map( c => {
        if(c.id === id){
          return res.data
        }
        return c
      })
      setClassrooms(updatedClassrooms)
    })
    .catch(err => console.log(err))
  } 

  return(
    <ClassroomContext.Provider value={{
      classrooms,
      addClassroom: addClassroom,
      deleteClassroom: deleteClassroom,
      updateClassroom: updateClassroom,
    }}>
      { children }
    </ClassroomContext.Provider>
  )

}

export default ClassroomProvider;