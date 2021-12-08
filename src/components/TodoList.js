import React,{Component} from 'react';
import Todo from './Todo.js';

class TodoList extends Component{
       render(){
         return(
           <div className={this.props.todolist.length!==0?"todolist":""}>
             <ul>
                 {this.props.todolist.map((item)=>{
                     return ( 
                     <Todo 
                        key={item.id}
                        todoitem = {item.text} 
                        todoid={item.id} 
                        delete={this.props.deletetodo}
                        edit={this.props.editTodo}
                        editingTodoId={this.props.editingTodoId}
                        updateTodo={this.props.updateTodo}
                    />)
                 }
                 )}
             </ul>
           </div>
        )
    }
}

export default TodoList