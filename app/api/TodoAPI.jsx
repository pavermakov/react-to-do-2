var $ = require('jQuery');

module.exports = {
  setTodos: function(todos){
    // accepts array
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    // returns array
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(err) {

    }

    return $.isArray(todos) ? todos : [];
  }
};