import React from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'
import '@fontsource/press-start-2p'
import App from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
