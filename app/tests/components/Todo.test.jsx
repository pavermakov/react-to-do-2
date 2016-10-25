var React     = require('react');
var ReactDOM  = require('react-dom');
var expect    = require('expect');
var TestUtils = require('react-addons-test-utils');
var $         = require('jQuery');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    var todoData = {
      id: 1,
      text: 'Test todo',
      completed: false
    };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(todo.props.onToggle).toHaveBeenCalledWith(todoData.id);
  });
});