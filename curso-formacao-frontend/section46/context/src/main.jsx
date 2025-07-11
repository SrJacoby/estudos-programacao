// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './routes/Home'
import Contact from "./routes/Contact"

// 2 - criando o provider
import { CounterContextProvider } from './context/CounterContext.jsx'

// 5 - Contexto mais completo

import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

import{
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
      <RouterProvider router={router} />
      
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
)
