import { NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import './MenuBar.css'
 
export default function MenuBar() {
  const navigate = useNavigate()
  const { toggleTheme } = useTheme()
 
  return (
    <header className="menu-bar">
      <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        Prompt Wallet
      </h1>
 
      <nav className="menu-nav">
        <NavLink to="/" className="menu-item">
          List
        </NavLink>
       
        <NavLink to="/terms" className="menu-item">
          Terms
        </NavLink>
        <NavLink to="/about" className="menu-item">
          About
        </NavLink>
      </nav>
 
      <button className="dark-mode-toggle" onClick={toggleTheme}>
        🌙
      </button>
    </header>
  )
}