let filters = {
  all : function(todos){
    return todos;
  },
  active:function(todos){
    return todos.filter(function(todo){
      return !todo.completed
    })
  },
  completed:function(todos){
    return todos.filter(function(todo){
      return todo.completed
    })
  }
}
// create new vue instance
new Vue({
  el: ".todoapp",
  data: {
    newTodo: '',
    visability:'all',
    todos: [
      { title: 'Go to Gym', completed: true },
      { title: 'Read a Book', completed: true },
      { title: 'Study Vue Js ', completed: false }
    ],
  },computed:{
    filteredTodos : function(){
     return filters [this.visability] (this.todos)
    }
  },
  methods: {
    deleteTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    addTodo: function () {
      if (this.newTodo != "") {


        this.todos.push(
          {
            'title': this.newTodo,
            'completed': false
          },
          this.newTodo = ""
        )
      }
    }
  }
});
