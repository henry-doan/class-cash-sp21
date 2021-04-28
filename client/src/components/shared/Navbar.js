import { AuthConsumer } from '../../providers/AuthProvider';
import {ClassroomConsumer} from '../../providers/ClassroomProvider';
import {EnrollmentConsumer} from '../../providers/EnrollmentProvider';
import { Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import DropdownBar from '../classrooms/DropDownBar';
import { useState } from 'react';
import DashboardLink from '../classrooms/DashboardLink';
import PDD from '../classrooms/SpringDropdown';
import basicDD from '../classrooms/basicDD';
import DropDownBar from '../classrooms/DropDownBar';
import { HoverButton } from '../../styledComponents/SharedStyles';
import { NavLogo, NavMenuItem } from '../../styledComponents/NavStyles'
import Logo from '../images/Logo.png'
import ImageDefault from '../images/ImageDefault.jpeg'
const Navbar = ({ location, user, handleLogout, history}) => {
  const [classroom, setClassroom] = useState([])
  const [getUserClassroom, setGetUserClassroom] = useState([])
  const rightNavItem = () => {
    if (user) {
      return (
        <>
          <Menu secondary>
            <Link to='/home'>
              <NavLogo src={Logo} centered/>
            </Link>
          </Menu>
          
          <Menu.Menu position='right'>
           
          
          <Link to='/profile'>
          <Menu.Item>
           <Image style={{
              borderRadius: '50%', 
              width: '45px', 
              height: '45px',
             
              }} 
              src={user.image || ImageDefault} 
              alt= {user.name}
              id='profile'
              // active={location.pathname === '/profile'}
              /> 
           </Menu.Item>
           </Link>

            <Menu.Item>
              
              <DropDownBar
              />
              
            </Menu.Item>
            <NavMenuItem
              name='logout'
              onClick={() => handleLogout(history)}
            />
          </Menu.Menu>
        </>
      )
    } 
    else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <NavMenuItem
              name='login'
              id='login'
              // active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <NavMenuItem
              name='register'
              id='register'
              // active={location.pathname === '/register'}
            />
          </Link>
          <Link to='/registerAdmin'>
            <NavMenuItem
              name='registerAdmin'
              id='registerAdmin'
              // active={location.pathname === '/registerAdmin'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  return(
    <>
      <Menu pointing secondary style={{height: '72px'}}>
      {/* <Link to='/about'>
        <Menu.Item
          name='about'
          id='about'
          active={location.pathname === '/about'}
        />
      </Link> */}
        { rightNavItem() }
      </Menu>
    </>
  )
}
// const ConnectedNavbar = (props) => (
//   <ClassroomConsumer>
//     {
//       value => (
//         <Navbar {...props} {...value} />
//       )
//     }
//   </ClassroomConsumer>
// )

// const EnrollmentConnectedNavbar = (props) => (
//   <EnrollmentConsumer>
//     {
//       value => (
//         <ConnectedNavbar {...props} {...value} />
//       )
//     }
//   </EnrollmentConsumer>
// )

// const AuthEnrollmentConnectedNavbar = (props) => (
//   <AuthConsumer>
//     { auth =>
//       <EnrollmentConnectedNavbar {...props} {...auth} />
//     }
//   </AuthConsumer>
// )

const ConnectedNavbar = (props) => (
      <AuthConsumer>
           { auth =>
         <Navbar {...props} {...auth} />
         }
         </AuthConsumer>
  )

export default withRouter(ConnectedNavbar);
