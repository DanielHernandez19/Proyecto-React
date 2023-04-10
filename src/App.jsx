import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './components/Login'

function App() {
  const { user, isAuthenticated } = useAuth0();
  console.log(window.location.origin);
  return (
    <div>
      {isAuthenticated ?
        (
          <>
            <Navbar name={user.name} />

          </>
        ) : (
          <Login />
        )}

    </div>
  )
}

export default App;