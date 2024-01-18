// frontend/src/components/Product.jsx
import React from 'react';

function Product({ name, price }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
