import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header>
        <Link to={'/'} className='logo'>
          Blog
        </Link>
        <Link to={'/create'}>
          <button>write</button>
        </Link>
        <Link to={'/login'}>
          <button>login</button>
        </Link>
        <Link to={'/register'}>
          <button>register</button>
        </Link>
      </header>
    </>
  )
}
