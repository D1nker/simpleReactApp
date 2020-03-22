import React, {useState, useEffect } from 'react';
import './assets/css/App.css';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import MainContent from './components/MainContent';
import Todos from './components/todo/Todos';
import Card from './components/product/ProductCard';
import Products from './components/product/Products';
import TodoItem from './components/todo/TodoItem';

const App = () => {
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

  useEffect(() => {
    fetchResource(productsUrl, setProducts);
    fetchResource(todosUrl, setTodos);
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
    <div className="App">
      <Header />
      <MainContent />
      <Todos>{todoItemsComponent}</Todos>
      <Products>{productsComponent}</Products>
      <Footer />
    </div>
  );
}

export default App;
