import "./App.css";
import React,{Component} from 'react';
import TodoItem from "./components/TodoItem.js";
import TodoList from "./components/TodoList.js";


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      todos:[],
      text:'',
      editingTodoId : null,
      isupdating:false
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.onDeleteTodo=this.onDeleteTodo.bind(this);
    this.editTodo=this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  handleChange(e){
    this.setState({
        text:e.target.value
    })
  
 }
handleSubmit(e) {
  e.preventDefault();
  if (this.state.text.length === 0) {
    return;
  }
  const newItem = {
    text: this.state.text,
    id: Date.now()
  };
  this.setState(prevState => ({
    todos: prevState.todos.concat(newItem),
    text: ''
  }));
}
onDeleteTodo(todo){
 const updatedtodos = this.state.todos.filter(el=>el.id!==todo)
 this.setState({
   todos:updatedtodos
 })

}
editTodo(todo){
  this.setState({
    editingTodoId:todo,
    isupdating:true
  })
  console.log("the todo being edited is ",todo)
}
updateTodo(todobody){
  var todoId = this.state.editingTodoId
  
  let listoftodos = this.state.todos;
  
  listoftodos.find(todo=>todo.id===todoId).text=todobody

  this.setState({
    todos:listoftodos,
    editingTodoId:null,
    isupdating:false
  })
}
  render(){
    return(
      <div className="App">
        <h1>TODO LIST</h1>
        <TodoList 
          todolist = {this.state.todos} 
          deletetodo={this.onDeleteTodo} 
          editTodo = {this.editTodo}
          editingTodoId={this.state.editingTodoId}
          updateTodo={this.updateTodo}
        />
        <TodoItem 
          inputValue={this.state.text} 
          inputChange={this.handleChange} 
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
export default App;