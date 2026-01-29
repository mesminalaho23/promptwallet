import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePrompts } from '../../context/PromptContext'
import PromptCard from '../../components/PromptCard/PromptCard'
import './Dashboard.css'

export default function Dashboard() {
  const { prompts, deletePrompt } = usePrompts()
  const [filter, setFilter] = useState('')
  const navigate = useNavigate()

  const filtered = prompts.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="container">
      <div className="header-section">
        <h2>My prompts</h2>
        <button className="new-button" onClick={() => navigate('/new')}>
          + New prompt
        </button>
      </div>

      <div className="filter-section">
        <input
          className="filter-input"
          placeholder="Search a prompt..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>No prompts saved</p>
        </div>
      ) : (
        <div className="prompts-grid">
          {filtered.map(prompt => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
              onEdit={(id) => navigate(`/edit/${id}`)}
              onDelete={deletePrompt}
              onUse={(id) => navigate(`/use/${id}`)}  // ← Clic sur titre
            />
          ))}
        </div>
      )}
    </div>
  )
}
