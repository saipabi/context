// import  { useState } from 'react'

// const App = () => {
//   const [count, Setcount] = useState(1)

//   function handleClick () {
//     Setcount (count+1)
    
//   }
//   return (
//     <div>
//        {/* <h4>{count}</h4> */}
//        <button onClick={handleClick}>{count}</button>

//        <div className='container'>


//        </div>
      
//     </div>
//   )
// }

// // function Parent (){
// //   return(
// //     <>

// //     <h4>{count}</h4>
// //     <Child/>
// //     </>
// //   )
// // }

// // function Child () {
// //   return(
// //     <>
// //     <h1>Hello this is suriya</h1>
// //     </>
// //   )
// // }

// export default App


import React from 'react';
import { CartProvider } from './CartContext';
import Cart from './Cart';
import ProductList from './ProductList';
import './styles.css';

const products = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  // Add more products as per your JSON data
];

function App() {
  return (
    <CartProvider>
      <ProductList products={products} />
      <Cart />
    </CartProvider>
  );
}

export default App;
