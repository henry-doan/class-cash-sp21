import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import DropDownList from "./DropDownList";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { AuthConsumer } from "../../providers/AuthProvider";



const PDD = ({location}) => {
  const [classroom, setClassroom] = useState({})
  const [isToggled, setToggle] = useState(false);
  const menubg = useSpring({ background: isToggled ? "#6ce2ff" : "#ebebeb" });
  const { y } = useSpring({
    y: isToggled ? 180 : 0
  });
  const menuAppear = useSpring({
    transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    opacity: isToggled ? 1 : 0
  });
  useEffect( () => {
  axios.get(`/api/classrooms/${location.pathname.split("/").pop()}`)
  .then( res => setClassroom(res.data))
  .catch( err => console.log(err))
}, [])

  return (
    <div style={{ position: "left"}}>
      <animated.button
        style={menubg}
        className="radiowrapper"
        onClick={() => setToggle(!isToggled)}
      >
        <div className="radio">
          <p>{classroom.name}</p>
        </div>
      </animated.button>
      <animated.div style={menuAppear}>
        {isToggled ? <DDContent /> : null}
      </animated.div>
    </div>
  );
};

const DDContent = () => {
  return (
    <div style={{ right: '0, !important', height:'30px',width: '900px'}}>
    <DropDownList />
    </div>
  );
};



const ConnectedPDD = (props) => (
  <AuthConsumer>
    { value => (
      <PDD {...props} {...value} />
    )}
  </AuthConsumer>
)

export default withRouter(ConnectedPDD);