angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn angularJS', done:true},
      {text:'learn JavaScript, CSS3 and HTML5', done:true},
      {text:'build an angular app', done:false}];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
    
    todoList.removeItem = function (x) {
        todoList.todoText = "";    
        todoList.todos.splice(x, 1);
    };

    todoList.todo =function (){

    };

    todoList.all =function (){

    };

    todoList.complete =function (){

    };

  });