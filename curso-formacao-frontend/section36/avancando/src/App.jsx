
import './App.css'

// imagem em assets
import night from "./assets/night.jpg"

// desestruturação

import CarDetails from './components/CarDetails'

// render condicional

import ConditionalRender from './components/ConditionalRender'

// Props

import ShowUsers from './components/ShowUsers'

// 3 - useState
import Data from './components/data'

// 4 - Renderização de List

import ListRender from './components/listRender'

// 11 - Renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

import Fragment from './components/Fragment'
import { Children, useState } from 'react'
import Container from './components/Container'
import ExecuteFunctions from './components/ExecuteFunctions'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {
  // 14 - Função em prop

  function showMessage(){
    console.log("Evento do componente pai")
  }

  // 15 - State lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }


  return (
    <div className='App' style={{paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - Imagem em assets */}
      <img src={night} alt="Outra imagem" />
      <Data/>
      {/* 4 - render de lista */}
      <ListRender/>
      {/* 7 - Render condicional */}
      <ConditionalRender/>
      {/* 8- Props */}
      <ShowUsers name="Matheus"/>
      {/* 9 - Desestruturação */}
      <CarDetails brand="VW" km={999} color="Vermelho"/>
      {/* 10 - Reaproveitamento de componense */}
      <CarDetails brand="Fiat" km={123444} color="Branco"/>
      <CarDetails km={9987} brand="Audi" color="Azul"/>
      {/* 11- Renderização de lista com componente */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}
      {/* 12 - Fragments */}
      <Fragment/>

      {/* 13 - Children */}
      <Container> 
        <p>Alguma coisa</p>
      </Container>

      <Container> 
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>

      {/* 14 - Função em Prop */}
      <ExecuteFunctions myFunction={showMessage}/>

      {/* 15 - State Lift */}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  )
}

export default App
