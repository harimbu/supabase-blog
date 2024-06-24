import { supabase } from '../config/supabase'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [rating, setRating] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    await supabase.from('posts').insert([{ title, content, rating }]).select()
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        type='text'
        placeholder='content'
        value={content}
        rows={8}
        onChange={e => setContent(e.target.value)}
      />
      <input
        type='number'
        placeholder='rating'
        value={rating}
        onChange={e => setRating(e.target.value)}
      />
      <button type='submit'>write</button>
    </form>
  )
}
