import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  // 4- Css inline dinâmico
  const n = 15
  // 5 - Classes dinamidcas
  const redTitle = true


  return (
    <div className='App'>
      {/* 1- Css global */}
      <h1 className="title">CSS no React</h1>
      {/* 2 - CSS de componente */}
      <MyComponent/>
      <p>Pegou o CSS do componente</p>
      {/* 3 - Inline Style */}
      <p style={{color: "blue", padding: "25px", borderTop: "1px solid blue"}}>Este elemento tem estilos inline</p>
      {/* 4 - Inline Style Dinâmico */}
      <h2 style={n>10 ? {color: "purple"} : {color: "magenta"}}>
        Css Dinâmico
      </h2>
      <h2 style={n>20 ? {color: "purple"} : {color: "magenta"}}>
        Css Dinâmico 2
      </h2>
      {/* 5 -  Classes dinamicas*/}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe</h2>
      {/* 6 - Css Modules*/}
      <Title/>
    </div>
  )
}

export default App
