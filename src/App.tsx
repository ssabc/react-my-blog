import React from 'react';
import './App.scss';
import { Router, Switch,Route,Redirect} from 'react-router-dom';
import Routes from './route/index';
import { createHashHistory } from 'history';
const browserHistory = createHashHistory();

class App extends React.Component{
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Routes}></Route>
      </Router>
    );
  }
}
export default App;
