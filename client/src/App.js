import React from 'react';
import './assets/css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Discover from './Discover';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Home from './components/static/Home';
import MainContent from './components/MainContent';
import Products from './components/product/Products';
import Todos from './components/todo/Todos';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/discover" component={Discover} />
          <Route path="/discover/count" component={MainContent} />
          <Route path="/discover/todos" component={Todos} />
          <Route path="/discover/products" component={Products} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
// take care about `exact`Route attribute that may cause some issue(s)
// learn more about it here = () => {
// https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path
// https://reacttraining.com/react-router/web/api/Route/exact-bool
// }

export default App;
