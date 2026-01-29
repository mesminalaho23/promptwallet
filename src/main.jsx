import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { PromptProvider } from './context/PromptContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PromptProvider>
        <App />
      </PromptProvider>
    </ThemeProvider>
  </React.StrictMode>
)
