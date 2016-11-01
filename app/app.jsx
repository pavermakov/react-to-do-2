var React    = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// Setting up redux
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state: ', store.getState());
});

store.dispatch(actions.addTodo('Walk the dog'));
store.dispatch(actions.setSearchText('dog'));
store.dispatch(actions.toggleShowCompleted());

// Load Foundation
$(document).foundation();

// app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
