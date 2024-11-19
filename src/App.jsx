import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import './components/ProductCard/App.css';

function App() {
  const [loading,setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .finally(()=> setLoading(false));
  },[]);

  return (
  <div class = "list">
    {loading && <div>Loading...</div>}
    {products.map((product)=>(
      <ProductCard data = {product}/>
    ))}
  </div>
  )
}
 export default App;
