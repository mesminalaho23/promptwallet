const KEY = 'prompt-wallet-data'

export const loadPrompts = () => {
  const data = localStorage.getItem(KEY)
  return data ? JSON.parse(data) : []
}

export const savePrompts = (prompts) => {
  localStorage.setItem(KEY, JSON.stringify(prompts))
}

export const extractPlaceholders = (text) => {
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

export const replacePlaceholders = (text, values) => {
  let result = text
  Object.keys(values).forEach(key => {
    const regex = new RegExp(`\\[${key}\\]`, 'g')
    result = result.replace(regex, values[key] || `[${key}]`)
  })
  return result
}