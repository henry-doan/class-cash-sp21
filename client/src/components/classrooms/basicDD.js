import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import DropDownList from "./DropDownList";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { AuthConsumer } from "../../providers/AuthProvider";



const BasicDD = ({location}) => {
  const [classroom, setClassroom] = useState({})

  useEffect( () => {
    axios.get(`/api/classrooms/${location.pathname.split("/").pop()}`)
    .then( res => setClassroom(res.data))
    .catch( err => console.log(err))
  }, [])

  return (
   <button> <div tabindex="0" class="onclick-menu">{classroom.name}
      <ul class="onclick-menu-content">
        <li><DropDownList/></li>
       
      </ul>
    </div>
    </button>
  )
}

const ConnectedbasicDD = (props) => (
  <AuthConsumer>
    { value => (
      <BasicDD {...props} {...value} />
    )}
  </AuthConsumer>
)

export default withRouter(ConnectedbasicDD);