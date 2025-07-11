import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

// 2 - pagina de erro
import ErrorPage from "./routes/ErrorPage";

// 3 - criando e configurando novas paginas
import Contact from "./routes/Contact";

// 4 - componente base
import Home from "./routes/Home";

// 9 - rotas dinâmicas
import Product from "./routes/Product";

// 8 - nested route
import Info from "./routes/Info";

// 9- Search params
import Search from "./routes/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 4 - componente base para páginas
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 9 - rotas dinâmicas
      {
        path: "products/:id",
        element: <Product />,
      },
      
      // 8 - nested route
      {
        path: "products/:id/info",
        element: <Info/>
      },

      // 9 - Search
      {
        path: "search",
        element: <Search />
      },
      // 10 - redirect
      {
        patch: "teste",
        element: <Navigate to="/"/>
      }
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
