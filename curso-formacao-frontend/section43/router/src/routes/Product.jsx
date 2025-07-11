import { useFetch } from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";


const Product = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <div>
      <p>ID do produto: {id}</p>
      <div>
        {/* 8- Nested route */}
        {/* <Link to={`/products/${product.id}/info`}>Mais informações</Link> */}
      </div>
    </div>
    
  );
};

export default Product;