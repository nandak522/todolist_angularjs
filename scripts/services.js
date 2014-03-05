angular.module('todolistApp')
  .factory('TodoItemsService', [function () {

    var todoItems = [
      {task: 'Learning scopes', done: false},
      {task: 'Learning services', done: false},
      {task: 'Learning providers', done: true}
    ];

    return {
      add: function(item){
        todoItems.push({task: item, done: false});
      },
      remove: function (index) {
        todoItems.splice(index, 1);
      },
      list: function () {
        return todoItems;
      },
      get: function (index) {
        return todoItems[index];
      }
      // TODO: done functionality
    }
  }]);
