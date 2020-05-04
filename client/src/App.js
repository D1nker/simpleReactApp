import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/App.css';
import { Discover, Footer, Header, Home } from './components/static';

const MainContent = React.lazy(() => import('./components/MainContent'));
const Products = React.lazy(() => import('./components/product/Products'));
const Todos = React.lazy(() => import('./components/todo/Todos'));

const App = () => {
  const loadingStyle = {
    color: 'white',
    border: '3px solid white',
    margin: '200px auto auto',
    padding: '10px',
    width: '50%'
  };

  return (
    <div className="App">
      <Suspense fallback={<h1 style={loadingStyle}>Loading...</h1>}>
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
      </Suspense>
    </div>
  );
};
// take care about `exact`Route attribute that may cause some issue(s)
// learn more about it here = () => {
// https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path
// https://reacttraining.com/react-router/web/api/Route/exact-bool
// }

export default App;
