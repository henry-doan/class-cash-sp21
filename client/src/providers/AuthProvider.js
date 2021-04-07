import React, { useState } from 'react';
import axios from 'axios';
export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const handleRegister = (user, history) => {
    axios.post('/api/auth', user)
      .then( res => {
        setUser(res.data.data)
        history.push('/')
      })
      .catch( err => console.log(err))
  }
  const handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
    .then( res => {
      setUser(res.data.data)
      history.push('/')
    })
    .catch( err => console.log(err))
  }
  const handleLogout = (history) => {
    axios.delete('/api/auth/sign_out')
      .then( res => {
        setUser(null)
        history.push('/login')
      })
      .catch( err => console.log(err))
  }
  return(
    <AuthContext.Provider value={{
      user,
      handleRegister: handleRegister,
      handleLogin: handleLogin,
      handleLogout: handleLogout, 
      authenticated: user !== null,
      setUser: (user) => setUser(user),
    }}>
      { children }
    </AuthContext.Provider>
  )
}
export default AuthProvider;