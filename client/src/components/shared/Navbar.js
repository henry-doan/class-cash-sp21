import { AuthConsumer } from '../../providers/AuthProvider';
import {ClassroomConsumer} from '../../providers/ClassroomProvider';
import {EnrollmentConsumer} from '../../providers/EnrollmentProvider';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import DropdownBar from '../classrooms/DropDownBar';
import { useState } from 'react';
const Navbar = ({ location, user, handleLogout, history}) => {
  const [classroom, setClassroom] = useState([])
  const [getUserClassroom, setGetUserClassroom] = useState([])
  const rightNavItem = () => {
    if (user) {
      return (
        <>
          <Menu pointing secondary>
            <Link to='/home'>
              <Menu.Item
                name='ClassCash'
                id='home'
                active={location.pathname === '/home'}
              />
            </Link>
          </Menu>
          
          <Menu.Menu position='right'>
            {/* <Link to="/Dashboard">
              <Menu.Item
                name='dashboard'
              />
            </Link> */}
            <Menu.Item>
              <DropdownBar classroom={setGetUserClassroom} />
            </Menu.Item>
            <Menu.Item
              name='logout'
              onClick={() => handleLogout(history)}
            />
          </Menu.Menu>
        </>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              name='login'
              id='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              name='register'
              id='register'
              active={location.pathname === '/register'}
            />
          </Link>
          <Link to='/registerAdmin'>
            <Menu.Item
              name='registerAdmin'
              id='registerAdmin'
              active={location.pathname === '/registerAdmin'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  return(
    <>
      <Menu pointing secondary>
      <Link to='/about'>
              <Menu.Item
                name='about'
                id='about'
                active={location.pathname === '/about'}
              />
            </Link>
        { rightNavItem() }
      </Menu>
    </>
  )
}
const ConnectedNavbar = (props) => (
  <ClassroomConsumer>
    {
      value => (
        <Navbar {...props} {...value} />
      )
    }
  </ClassroomConsumer>
)

const EnrollmentConnectedNavbar = (props) => (
  <EnrollmentConsumer>
    {
      value => (
        <ConnectedNavbar {...props} {...value} />
      )
    }
  </EnrollmentConsumer>
)

const AuthEnrollmentConnectedNavbar = (props) => (
  <AuthConsumer>
    { auth =>
      <EnrollmentConnectedNavbar {...props} {...auth} />
    }
  </AuthConsumer>
)


export default withRouter(AuthEnrollmentConnectedNavbar);