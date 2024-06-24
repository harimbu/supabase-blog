import { Link } from 'react-router-dom'
import { supabase } from '../config/supabase'

export default function Post({ post, onDelete }) {
  async function removePost(id) {
    if (confirm('정말 삭제하시겠습니까')) {
      await supabase.from('posts').delete().eq('id', id)
      onDelete(id)
    }
  }

  return (
    <div className='post' key={post.id}>
      <div className='title'>{post.title}</div>
      <div className='content'>{post.content}</div>
      <div className='rating'>{post.rating}</div>
      <div className='btns'>
        <Link to={`/update/${post.id}`} state={post}>
          <button>수정</button>
        </Link>
        <button onClick={() => removePost(post.id)}>삭제</button>
      </div>
    </div>
  )
}
