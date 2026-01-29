import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { PromptProvider } from './context/PromptContext'
import MenuBar from './components/Layout/MenuBar'
import Dashboard from './pages/Dashboard/Dashboard'
import FormPage from './pages/FormPage/FormPage'
import UsePage from './pages/UsePage/UsePage'
import TermsPage from './pages/TermsPage/TermsPage'
import AboutPage from './pages/AboutPage/AboutPage'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <PromptProvider>
        <BrowserRouter>
          <MenuBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/new" element={<FormPage />} />
            <Route path="/edit/:id" element={<FormPage />} />
            <Route path="/use/:id" element={<UsePage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </PromptProvider>
    </ThemeProvider>
  )
}

export default App