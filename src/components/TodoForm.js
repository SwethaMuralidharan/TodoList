import React,{Component} from 'react';

class TodoForm extends Component{
    
    constructor(){
        super();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleUpdateSubmit=this.handleUpdateSubmit.bind(this);
        
    }
    handleInputChange(e){
        this.setState({
            todo:e.target.value
        })
    }
    handleUpdateSubmit(e){
        e.preventDefault();
        var todo = this.state.todo
        this.props.updateTodo(todo);
        this.setState({
            todo:''
        })

    }
   
    render(){
     const buttonstyle={
         fontSize:10,
         width:"30%"
     }
        return(
            <form className="editform" onSubmit={this.handleUpdateSubmit}>
                <label>Edit your todo</label>
                <input 
                    autoFocus={true}
                    type="text"  
                    value={(this.state && this.state.todo) || ''}
                    onChange={this.handleInputChange}></input>
                <br/>
                <button style={buttonstyle}>Update</button>
            </form>
        )
    }
}
export default TodoForm;