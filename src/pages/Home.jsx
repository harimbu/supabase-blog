import { useEffect, useState } from 'react'
import { supabase } from '../config/supabase'
import Post from '../components/Post'

export default function Home() {
  const [posts, setPosts] = useState([])

  function handleDelete(id) {
    setPosts(prev => prev.filter(item => item.id !== id))
  }

  useEffect(() => {
    async function getPosts() {
      const { data: posts } = await supabase.from('posts').select('*')
      setPosts(posts)
    }
    getPosts()
  }, [])

  return (
    <div className='posts'>
      {posts.map(post => (
        <Post key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </div>
  )
}
