import React,{Component} from 'react';
import TodoForm  from './TodoForm';

class Todo extends Component{
    constructor(){
        super();
        this.deleteClickedTodo=this.deleteClickedTodo.bind(this);
        this.editClickedTodo=this.editClickedTodo.bind(this);
        
    }
    deleteClickedTodo(){
        this.props.delete(this.props.todoid)
    }
    editClickedTodo(){
        this.props.edit(this.props.todoid);
       
    }
    render(){
         return(
            <div className="todo">
                <li key={this.props.todoid}>{this.props.todoitem}  </li>
                <button onClick={this.editClickedTodo}> Edit </button>
                <button onClick={ this.deleteClickedTodo }>X</button> 
                { this.props.editingTodoId === this.props.todoid ?
                <TodoForm updateTodo={this.props.updateTodo}/>:''}
            </div>
            
           
        )
    }
}
export default Todo;