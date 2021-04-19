import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ClassroomContext = React.createContext();
export const ClassroomConsumer = ClassroomContext.Consumer;
const ClassroomProvider = ({ children }) => {
  const [classrooms, setClassrooms] = useState([])
  const [classroom, setClassroom] = useState()
  useEffect ( () => {
    axios.get('/api/classrooms')
      .then( res => {
        setClassrooms(res.data)
      })
      .catch( err => console.log(err))
  }, [])
  const getClassroom = (id) => {
    axios.get(`/api/classrooms/${id}`)
    .then( res => setClassroom(res.data) )
    .catch( err => console.log(err) )
  }
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

  // const getClassroomUsers = () => {
  //   axios.get(`/api/classroomUsers/${classroom.id}`)
  //   .then( res => setClassroomUsers(res.data))
  //   .catch( err => console.log(err))
  // }

  
  return(
    <ClassroomContext.Provider value={{
      classrooms,
      classroom,
      addClassroom: addClassroom,
      deleteClassroom: deleteClassroom,
      updateClassroom: updateClassroom,
      getClassroom: getClassroom
    }}>
      { children }
    </ClassroomContext.Provider>
  )
}
export default ClassroomProvider;