var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'homework'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add todos', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '1',
          text: 'Something to do',
          completed: false,
          createdAt: 123,
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toBe(action.todo);
    });

    it('should toggle todo', () => {
      var todos = [{
        id: '1',
        text: 'Random Text',
        completed: true,
        createdAt: 123,
        completedAt: 155
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: todos[0].id
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toBe(false);
      expect(res[0].completedAt).toBe(undefined);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: '1',
        text: 'Random text',
        completed: false,
        createdAt: 3333,
        completedAt: undefined
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });

});