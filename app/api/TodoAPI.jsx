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
  },
  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter(todo => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter(todo => {
      var text = todo.text.toLowerCase();
      return text.length === 0 || text.indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    filteredTodos.sort((prevTodo, nextTodo) => {
      // return -1 if prevTodo comes before nextTodo
      if(!prevTodo.completed && nextTodo.completed){
        return -1;
      } else if(prevTodo.completed && !nextTodo.completed){
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};