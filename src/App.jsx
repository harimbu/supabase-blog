import { BrowserRouter, Route, Routes } from 'react-router-dom'

// page
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}
