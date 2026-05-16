import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

// Keep global styling “Tailwind-only” by applying classes at runtime
// (no custom CSS beyond Tailwind’s import entry file).
document.body.className =
  'min-h-screen bg-[#07080c] text-white antialiased selection:bg-fuchsia-500/30 selection:text-white'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)

