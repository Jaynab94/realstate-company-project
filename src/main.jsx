import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import route from './all-routs/AllRouts.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={route} />
      </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>,
)
