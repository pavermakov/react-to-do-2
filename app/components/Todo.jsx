var React = require('react');

var Todo = React.createClass({
  handleClick: function(id){
    return () => {
      this.props.onToggle(id);
    }
  },
  render: function(){
    var {id, text, completed} = this.props;

    return (
      <div onClick={this.handleClick(id)}>
        <input type="checkbox" checked={completed} />
        {text}
      </div>
    );
  }
});

module.exports = Todo;