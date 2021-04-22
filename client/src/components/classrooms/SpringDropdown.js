import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import DropDownList from "./DropDownList";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { AuthConsumer } from "../../providers/AuthProvider";
import {Vutton, Divv, Divvv} from '../../styledComponents/SharedStyles'
import { Grid } from "semantic-ui-react";


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
    <div style={{ position: "relative"}}>
      <Vutton
        style={menubg}
        className="radiowrapper"
        onClick={() => setToggle(!isToggled)}
      >
        <div className="radio">
          <p>{classroom.name}</p>
        </div>
      </Vutton>
      <Divvv  style={menuAppear}>
        {isToggled ? <DDContent /> : null}
      </Divvv>
    </div>
  );
};

const DDContent = () => {
  return (
    
    <Divv >
    <DropDownList />
    </Divv>
   
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