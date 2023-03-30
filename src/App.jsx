import { useState } from 'react'
import Navbar from './components/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components/LoginButton';

function App() {
  const { user, isAuthenticated } = useAuth0();
  console.log(window.location.origin)
  return (
    <div>
      {isAuthenticated ? (
        <>  <Navbar name={user.name} />
        </>
      ) : (

        <LoginButton />
      )}

    </div>
  )
}

export default App
