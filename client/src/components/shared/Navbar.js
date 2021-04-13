import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
const Navbar = ({ location, user, handleLogout, history }) => {
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
<<<<<<< HEAD
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
=======
          
>>>>>>> f5983ea (fixed changes)
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
  <AuthConsumer>
    { auth =>
      <Navbar {...props} {...auth} />
    }
  </AuthConsumer>
)
export default withRouter(ConnectedNavbar);