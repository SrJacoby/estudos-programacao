import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//1 - Configurando Router

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import ContactDetail from './routes/ContactDetail.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //3 - Página de Erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
      path: "/contact",
      element: <Contact />,
      },
      //5 - Rotas Aninhadas - Id único - Rotas Dinâmicas
      {
        path: "/contact/:id",
        element: <ContactDetail/>,
      },
      // 7 - Navigate para Páginas não Existentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
