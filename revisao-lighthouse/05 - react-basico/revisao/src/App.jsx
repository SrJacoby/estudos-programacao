import './App.css'
import { useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0)
  const clicar = () => console.log("Oi")

  return (
    <>
      <h1>Olá!</h1>
      <button onClick={clicar}>Clique!</button>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Contador</button>
      
    </>
  )
}

export default App
