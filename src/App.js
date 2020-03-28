import React from 'react';
import './assets/css/App.css';
import { Route, Switch } from 'react-router-dom'
import Discover from './Discover';
import Static from './components/static/Static'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Static} />
        <Route path="/discover" component={Discover} />
      </Switch>
    </div>
  );
}
// take care about `exact`Route attribute that may cause some issue(s)
// learn more about it here = () => {
// https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path
// https://reacttraining.com/react-router/web/api/Route/exact-bool
// }

export default App;
