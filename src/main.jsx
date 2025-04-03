/**
 * main.jsx - Application Entry Point
 * 
 * This file serves as the entry point for the React application.
 * It renders the main App component into the DOM inside a StrictMode wrapper.
 * 
 * StrictMode is a development tool that performs additional checks and warnings
 * to help identify potential problems in the application.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Create a root element and render the App component inside StrictMode
// This uses the modern React 18+ createRoot API instead of the legacy ReactDOM.render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
