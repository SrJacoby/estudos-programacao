import './App.css'

import { Outlet } from 'react-router-dom'

// 5- Link entre páginas
import Navbar from './components/Navbar'

import SearchForm from './components/SearchForm'

function App() {


  return (
    <>
      <Navbar/>
      <SearchForm />
      <Outlet/>

      <p>Footer</p>
    </>
  )
}

export default App
