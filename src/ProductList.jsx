import { useContext } from 'react';

import { CartContext } from './CartContext';
import './styles.css';

const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>{product.title}</div>
            <div>Price: ${product.price}</div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProductList;
