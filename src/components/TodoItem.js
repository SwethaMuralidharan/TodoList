import React,{Component} from 'react';

class TodoItem extends Component{


    render(){
        return(
           <div>
               <form onSubmit={this.props.onSubmit}>
                    <label><p>What needs to be done?</p></label>
                    <input type="text" value={this.props.inputValue} onChange={this.props.inputChange}></input>
                    <br/><br/>
                    <button>Add to List</button>
                </form>
           </div>
        )
    }
}
export default TodoItem