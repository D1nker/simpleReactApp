import React, { useEffect, useState } from 'react';
import '../../assets/css/App.css';
import ProductCard from './ProductCard';

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const productsUrl = 'http://localhost:3001/products';

  const fetchResource = (url, setter) => fetch(url)
    .then(res => res.json())
    .then(result => setter(result))
  ;

  // on peut avoir autant de useEffect qu'on veut
  // second empty array parameter to encure that useEffect is running once
  // insert var you wanna "watch" here and make DOM updates
  useEffect(() => {
    fetchResource(productsUrl, setProducts);
  }, []);

  return (
    <div className="App-products">
      {
        products.map(product =>
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        )
      }
    </div>
  );
}

export default Products;
