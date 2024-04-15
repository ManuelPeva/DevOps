/* eslint-disable no-unused-vars */
// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(error => console.error('Failed to fetch products', error));
  }, []);

  return (
    <div>
    <h1 className='title-products'>Productos</h1>
    <hr className='underline'/>
    <div className='card-container'>
        {products.map(product => (
            <div key={product.id} className='product-card'>
                <img src={product.image} alt={product.title} className='product-image'/>
                <h2 className='product-title'>{product.title}</h2>
                <p className='product-price'>${product.price}</p>
            </div>
        ))}
    </div>
</div>
  );
}

export default ProductList;
