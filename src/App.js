import React, {useState, useEffect } from 'react';
import './assets/css/App.css';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import MainContent from './components/MainContent';
import Todos from './components/todo/Todos';
import Card from './components/product/ProductCard';
import Products from './components/product/Products';

const App = () => {
  // Déclaration d'une nouvelle variable d'état, "products" ++ son setter
  const [products, setProducts] = useState([]);
  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(result => setProducts(result))
    ;
  }, []); // second parameter to encure that useEffect is running once

  const productsComponent = products.map(product => {
    return (
      <Card
        key={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Todos />
      <Products>{productsComponent}</Products>
      <Footer />
    </div>
  );
}

export default App;
