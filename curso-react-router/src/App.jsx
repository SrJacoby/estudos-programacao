//2- Reaproveitar Estrutura
import { Outlet } from 'react-router-dom'

//4 - Navegação de Páginas
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default App
