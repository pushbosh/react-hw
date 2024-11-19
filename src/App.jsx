import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";

const values = [
  {
    id:0,
    name:"Emperor of Mankind",
    price: 1500,
    category:"Not Prime",
    image: "https://merlinsminiatures.co.uk/cdn/shop/articles/image1_1dca8ddf-cbfd-4182-8f57-4c4c43ddcb7e.jpg?v=1726502210&width=1100"
  },
  {
    id:1,
    name:"Emperor of Mankind",
    price: 1900,
    category:"Prime",
    image: "https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/9a2449b3-cfdf-4938-8c99-fe9310dd4f00/avatarhd"
  }
]



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
