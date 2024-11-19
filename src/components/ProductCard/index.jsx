import "./App.css";
export function ProductCard(props){

   const {image,category,title,price} = props.data 
    return(
        <div class="product">
            <img class = "images" src={image} alt="" />
            <span>{category}</span>
            <h4>{title}</h4>
            <div class = "price">
            <span class = "price-label">${price}</span><button class = "boton"> Buy Now</button>
            </div>
        </div>
    );
}