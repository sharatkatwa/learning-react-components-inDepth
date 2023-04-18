import './index.css'
import React from 'react'
import reactDOM from 'react-dom/client'

import { NavigationProvider } from './context/Navigation'
import App from './App'

const el = document.getElementById('root')
const root = reactDOM.createRoot(el)

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
)
