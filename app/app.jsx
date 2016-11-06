var React      = require('react');
var ReactDOM   = require('react-dom');
var {Provider} = require('react-redux');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
var actions    = require('actions');
var store      = require('configureStore').configure();
var TodoAPI    = require('TodoAPI');
import Login from 'Login';

store.dispatch(actions.startAddTodos());

// Load Foundation
$(document).foundation();

// app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'>
        <Route path='todos' component={TodoApp} />
        <IndexRoute component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
