var React      = require('react');
var ReactDOM   = require('react-dom');
var {Provider} = require('react-redux');
import {hashHistory} from 'react-router';

var actions    = require('actions');
var store      = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

store.dispatch(actions.startAddTodos());

// Load Foundation
$(document).foundation();

// app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
