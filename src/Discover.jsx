import React, {useState, useEffect } from 'react';
import './assets/css/App.css';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Todos from './components/todo/Todos';
import Card from './components/product/ProductCard';
import Products from './components/product/Products';
import TodoItem from './components/todo/TodoItem';
// import Test from './components/Test';
// import ShittyForm from './components/ShittyFrom';

const Discover = () => {
  // Déclaration d'une nouvelle variable d'état, "products" ++ son setter
  const [products, setProducts] = useState([]);
  // Similaire à componentDidMount et componentDidUpdate :
  const [todos, setTodos] = useState([]);

  const productsUrl = 'http://localhost:3001/products';
  const todosUrl = 'http://localhost:3001/todos';

  const fetchResource = (url, setter) => fetch(url)
    .then(res => res.json())
    .then(result => setter(result))
  ;

  // on peut avoir autant de useEffect qu'on veut
  useEffect(() => {
    fetchResource(productsUrl, setProducts);
    fetchResource(todosUrl, setTodos);
  }, []); // second empty array parameter to encure that useEffect is running once
          // insert var you wanna "watch" here and make DOM updates

  function discover() {
    console.log('falut');
  }
  const productsComponent = products.map(product => {
    return (
      <Card
        key={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        discover={discover}
      />
    )
  })

  const todoItemsComponent = todos.map(todo => {
    return (
      <TodoItem
        key={todo.id}
        name={todo.name}
        completed={todo.completed}
      />
    )
  })

  return (
    <div className="Discover">
      <Header />
      <Todos>{todoItemsComponent}</Todos>
      <Products>{productsComponent}</Products>
      <Footer />
    </div>
  );
}

export default Discover;
