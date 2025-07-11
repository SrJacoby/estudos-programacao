import './App.css'

// 2 - Importando Componente

import FirstComponent from './components/FirstComponent'

// 5 - Hierarquia
import MyComponent from './components/MyComponent'

// 4 - Template Expressions
import TemplateExpression from './components/TemplateExpression'

// 6 - Eventos
import Events from './components/Events'

function App() {
  // 3 - Comentários
  return (
    <>
    {/* 4 - Comentários JSX */}
    <h1>Fundamentos do React</h1>
    
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </>
  )
}

export default App
