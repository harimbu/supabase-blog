import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../config/supabase'

export default function Update() {
  const post = useLocation().state

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [rating, setRating] = useState(post.rating)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    await supabase
      .from('posts')
      .update({ title, content, rating })
      .eq('id', post.id)

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
      <button type='submit'>edit</button>
    </form>
  )
}
