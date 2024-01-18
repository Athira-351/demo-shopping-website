import React from 'react';
import { useState, useEffect } from 'react';

import Product from './components/Product';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>E-commerce Website</h1>
      <div>
        {products.map(product => (
          <Product key={product._id.$oid} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
}

export default App;
