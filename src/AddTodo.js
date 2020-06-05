import React, { Component } from 'react';
 
class AddTodo extends Component {
 
  constructor(props){
      super(props);
 
      this.state = { 
        title: '',
        body: '',
      }
  }
  
  render(){
    return (
        <div>
        <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} />
   
            <label>body:</label>
            <input type="text" name="body" value={this.state.body} />
            
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
 
export default AddTodo;