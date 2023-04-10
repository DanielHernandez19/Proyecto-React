import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-47vw8vushfjqepnx.us.auth0.com'
    clientId='XeX2sMZC76qImCKB8lACSNCCo9YvLV2G'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>
)

