import { createContext, useContext, useState } from 'react'
import { loadPrompts, savePrompts } from '../utils/storage'

const PromptContext = createContext()

export function PromptProvider({ children }) {
  const [prompts, setPrompts] = useState(loadPrompts())

  const addPrompt = (prompt) => {
    const updated = [...prompts, prompt]
    setPrompts(updated)
    savePrompts(updated)
  }

  const updatePrompt = (updatedPrompt) => {
    const updated = prompts.map(p =>
      p.id === updatedPrompt.id ? updatedPrompt : p
    )
    setPrompts(updated)
    savePrompts(updated)
  }

  const deletePrompt = (id) => {
    const updated = prompts.filter(p => p.id !== id)
    setPrompts(updated)
    savePrompts(updated)
  }

  return (
    <PromptContext.Provider value={{ prompts, addPrompt, updatePrompt, deletePrompt }}>
      {children}
    </PromptContext.Provider>
  )
}

export const usePrompts = () => useContext(PromptContext)
