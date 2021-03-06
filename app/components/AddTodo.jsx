var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleFormSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" ref="todoText" placeholder="Enter a new task" />
          <button className="button expanded">Add todo</button>
        </form>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {

    }
  }
)(AddTodo);