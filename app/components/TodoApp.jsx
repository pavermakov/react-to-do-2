var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Do your homework'
        },
        {
          id: 2,
          text: 'Send cv somewhere'
        },
        {
          id: 3,
          text: 'Talk to Jen'
        }
      ]
    }
  },
  handleAddTodo: function(text){
    alert('New todo added: ' + text);
  },
  render: function(){
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;