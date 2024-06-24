import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='email'
        value={email}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={e => setRating(e.target.value)}
      />
      <button type='submit'>login</button>
    </form>
  )
}
