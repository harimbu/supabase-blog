import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header>
        <Link to={'/'} className='logo'>
          Supa-blog
        </Link>
        <Link to={'/create'}>write</Link>
        <Link to={'/login'}>login</Link>
      </header>
    </>
  )
}
