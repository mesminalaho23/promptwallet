import { useEffect, useState } from 'react'
import './DynamicForm.css'
 
export default function DynamicForm({ template = '', onGenerate }) {
  const [values, setValues] = useState({})
  const [placeholders, setPlaceholders] = useState([])
 
  useEffect(() => {
    if (!template || typeof template !== 'string') {
      setPlaceholders([])
      return
    }
 
    // ✅ Support pour [placeholder] au lieu de {placeholder}
    const matches = template.match(/\[([^\]]+)\]/g) || []
    const unique = [...new Set(matches.map(p => p.replace(/[\[\]]/g, '')))]
 
    setPlaceholders(unique)
   
    // Initialiser les valeurs vides
    const initialValues = {}
    unique.forEach(p => {
      initialValues[p] = ''
    })
    setValues(initialValues)
  }, [template])
 
  useEffect(() => {
    // ✅ Mise à jour automatique en temps réel
    let result = template
    placeholders.forEach(p => {
      const value = values[p] || `[${p}]`
      result = result.replaceAll(`[${p}]`, value)
    })
    onGenerate(result)
  }, [values, template, placeholders, onGenerate])
 
  const handleChange = (key, value) => {
    setValues({ ...values, [key]: value })
  }
 
  if (placeholders.length === 0) {
    return <p className="dynamic-form-empty">No dynamic fields detected.</p>
  }
 
  return (
    <div className="dynamic-form">
      {placeholders.map(p => (
        <div className="dynamic-form-group" key={p}>
          <label className="dynamic-form-label">{p}:</label>
          <input
            className="dynamic-form-input"
            type="text"
            value={values[p] || ''}
            onChange={(e) => handleChange(p, e.target.value)}
            placeholder={`Enter ${p}...`}
          />
        </div>
      ))}
    </div>
  )
}