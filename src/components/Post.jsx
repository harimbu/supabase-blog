import { Link } from 'react-router-dom'

export default function Post({ post }) {
  return (
    <div className='post' key={post.id}>
      <div>{post.title}</div>
      <div>{post.content}</div>
      <div>{post.rating}</div>
      <div className='btns'>
        <Link to={`/update/${post.id}`} state={post}>
          <button>수정</button>
        </Link>
        <button>삭제</button>
      </div>
    </div>
  )
}
