import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/Context/ThemeContext.jsx';
import { UserProvider } from './components/Context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
      <App />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
)
