import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { usePrompts } from '../../context/PromptContext'
import './UsePage.css'

// Fonction pour extraire les placeholders
const extractPlaceholders = (text) => {
  const regex = /\[([^\]]+)\]/g
  const matches = []
  let match
  while ((match = regex.exec(text)) !== null) {
    if (!matches.includes(match[1])) {
      matches.push(match[1])
    }
  }
  return matches
}

// Fonction pour remplacer les placeholders
const replacePlaceholders = (text, values) => {
  let result = text
  Object.keys(values).forEach(key => {
    const regex = new RegExp(`\\[${key}\\]`, 'g')
    result = result.replace(regex, values[key] || `[${key}]`)
  })
  return result
}

export default function UsePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { prompts } = usePrompts()
  
  const prompt = prompts.find(p => String(p.id) === id)
  
  const [placeholders, setPlaceholders] = useState([])
  const [values, setValues] = useState({})
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (prompt) {
      const extracted = extractPlaceholders(prompt.content)
      setPlaceholders(extracted)
      setGeneratedPrompt(prompt.content)
      
      const initialValues = {}
      extracted.forEach(placeholder => {
        initialValues[placeholder] = ''
      })
      setValues(initialValues)
    }
  }, [prompt])

  // ✅ Mise à jour en temps réel du résultat
  useEffect(() => {
    if (prompt) {
      const replaced = replacePlaceholders(prompt.content, values)
      setGeneratedPrompt(replaced)
    }
  }, [values, prompt])

  const handleValueChange = (placeholder, value) => {
    setValues(prev => ({
      ...prev,
      [placeholder]: value
    }))
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
      alert('Failed to copy to clipboard')
    }
  }

  if (!prompt) {
    return (
      <div className="container">
        <p style={{ padding: '40px' }}>Prompt not found</p>
        <button onClick={() => navigate('/')}>← Back to Dashboard</button>
      </div>
    )
  }

  const renderTemplateWithHighlights = () => {
    let result = prompt.content
    placeholders.forEach(placeholder => {
      const regex = new RegExp(`\\[${placeholder}\\]`, 'g')
      result = result.replace(
        regex,
        `<span class="placeholder-highlight">[${placeholder}]</span>`
      )
    })
    return { __html: result }
  }

  return (
    <div className="container">
      <span className="back-button" onClick={() => navigate('/')}>
        ← Back to Dashboard
      </span>
      
      <div className="page-header">
        <h2>{prompt.title}</h2>
      </div>

      <div className="content-grid">
        {/* TEMPLATE ORIGINAL */}
        <div className="card">
          <h3>📝 Prompt Template</h3>
          <div 
            className="prompt-template"
            dangerouslySetInnerHTML={renderTemplateWithHighlights()}
          />
        </div>

        {/* FORMULAIRE + RÉSULTAT */}
        <div className="card">
          <h3>✏️ Fill Dynamic Fields</h3>
          
          {placeholders.length === 0 ? (
            <p className="no-placeholders">This prompt has no dynamic placeholders.</p>
          ) : (
            <div className="form-section">
              {placeholders.map((placeholder) => (
                <div className="form-group" key={placeholder}>
                  <label className="form-label" htmlFor={placeholder}>
                    {placeholder}:
                  </label>
                  <input
                    type="text"
                    id={placeholder}
                    className="form-input"
                    placeholder={`Enter ${placeholder}...`}
                    value={values[placeholder] || ''}
                    onChange={(e) => handleValueChange(placeholder, e.target.value)}
                  />
                </div>
              ))}
            </div>
          )}

          {/* ✅ SECTION RÉSULTAT - TOUJOURS VISIBLE */}
          <div className="result-section">
            <h3>✨ Generated Prompt</h3>
            <div className="result-box">{generatedPrompt}</div>
            <button className="btn-copy" onClick={handleCopy}>
              📋 Copy to Clipboard
            </button>
            {copied && (
              <p className="success-message show">
                ✓ Copied to clipboard!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}