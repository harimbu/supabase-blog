import { useState, useEffect } from 'react'
import { supabase } from '../conf/supabase'
import Post from '../components/Post'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const { data, error } = await supabase.from('posts').select('*')
      if (error) console.log(error)
      if (data) setPosts(data)
    }
    getPosts()
  }, [])

  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}
