import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/products";

const { data: items, loading, error } = useFetch(url);

import { Link, useSearchParams } from "react-router-dom";

import React from 'react'

const Search = () => {

const {searchParams} = useSearchParams()

const {data: items} = useFetch(url)

const url = "http://localhost:3000/products?" + searchParams;

  return (
    <div>
        <h1>Resultados da pesquisa</h1>
        <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              {/* 8 - rota dinamica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Search