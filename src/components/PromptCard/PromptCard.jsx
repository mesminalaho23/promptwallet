import { useNavigate } from 'react-router-dom'
import './PromptCard.css'
 
export default function PromptCard({ prompt, onDelete }) {
  const navigate = useNavigate()
 
  return (
    <div className="prompt-card">
     
      {/* TITRE */}
      <h3
        className="prompt-title"
        onClick={() => navigate(`/use/${prompt.id}`)}
      >
        {prompt.title}
      </h3>
 
      {/* DESCRIPTION */}
      <p className="prompt-description">
        {prompt.description}
      </p>
 
      {/* ACTIONS */}
      <div className="prompt-actions">
        <button
          className="btn-edit"
          onClick={() => navigate(`/edit/${prompt.id}`)}
        >
          Modifier
        </button>
 
        <button
          className="btn-delete"
          onClick={() => onDelete(prompt.id)}
        >
          Supprimer
        </button>
      </div>
 
    </div>
  )
}