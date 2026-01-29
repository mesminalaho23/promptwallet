import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { usePrompts } from '../../context/PromptContext'
import './FormPage.css'

export default function FormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { prompts, addPrompt, updatePrompt } = usePrompts()

  const existing = prompts.find(p => p.id === id)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('') // ✅ AJOUT
  const [content, setContent] = useState('')

  useEffect(() => {
    if (existing) {
      setTitle(existing.title)
      setDescription(existing.description || '') // ✅ AJOUT
      setContent(existing.content)
    }
  }, [existing])

  const handleSubmit = () => {
    if (!title || !content) {
      alert('Title and content are required!')
      return
    }

    const data = {
      id: existing ? existing.id : crypto.randomUUID(),
      title,
      description, // ✅ AJOUT
      content
    }

    existing ? updatePrompt(data) : addPrompt(data)
    navigate('/')
  }

  return (
    <div className="container">
      <div className="page-header">
        <h2>{existing ? 'Edit' : 'Create'} a prompt</h2>
        <p>
          Dynamic fields use <code>[variable]</code> syntax
        </p>
      </div>

      <div className="form-card">
        {/* CHAMP INFO */}
        <div className="dynamic-placeholders-info">
          <h4>💡 Dynamic Placeholders</h4>
          <p>
            Use <code>[placeholder_name]</code> syntax to create dynamic fields. 
            Example: <code>[language]</code>, <code>[topic]</code>, <code>[framework]</code>
          </p>
        </div>

        {/* TITRE */}
        <div className="form-group">
          <label className="form-label">Title *</label>
          <input
            className="form-input"
            placeholder="e.g., Web Development Tutor"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        {/* ✅ DESCRIPTION - NOUVEAU CHAMP */}
        <div className="form-group">
          <label className="form-label">Description</label>
          <input
            className="form-input"
            placeholder="e.g., A helpful tutor for learning programming concepts"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <p className="help-text">
            Short description that will appear on the prompt card (optional)
          </p>
        </div>

        {/* CONTENU */}
        <div className="form-group">
          <label className="form-label">Prompt Content *</label>
          <textarea
            className="form-input form-textarea"
            placeholder="Enter your prompt here...

Example with dynamic placeholders:
As a student in [subject], I need your help.
You are an experienced [role] with expertise in [technology].
Can you explain the concept of [topic] with examples?"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <p className="help-text">
            Add dynamic placeholders using square brackets like <code>[variable_name]</code>
          </p>
        </div>

        {/* ACTIONS */}
        <div className="form-actions">
          <button className="btn-cancel" onClick={() => navigate('/')}>
            Cancel
          </button>
          <button className="btn-save" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}