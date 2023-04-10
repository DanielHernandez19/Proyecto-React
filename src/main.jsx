import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-47vw8vushfjqepnx.us.auth0.com'
    clientId='FMJUZZ4rui4T4FAXYUhp5llyDXluPHx1'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>
)

