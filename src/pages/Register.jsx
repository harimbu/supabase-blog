import { useState } from 'react'
import { supabase } from '../config/supabase'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function Register() {
  const [session, setSession] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
  } else {
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
}
