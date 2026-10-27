import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import '../stylesheets/style.css'

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
}
