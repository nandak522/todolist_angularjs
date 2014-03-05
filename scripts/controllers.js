angular.module('todolistApp')
  .controller('listController', ['TodoItemsService', function(TodoItemsService){
    var self = this;

    self.getTodoItems = TodoItemsService.list;

    self.getItemStatus = function(itemIndex){
      return TodoItemsService.get(itemIndex).done ? 'completed' : 'not'
    };

    self.deleteItem = function (itemIndex) {
      TodoItemsService.remove(itemIndex);
    };

  }])
  .controller('addItemController', ['TodoItemsService', function(TodoItemsService){
    var self = this;

    self.addItem = function () {
      TodoItemsService.add(self.newTodoItem);
      self.newTodoItem = '';
    };

  }]);
