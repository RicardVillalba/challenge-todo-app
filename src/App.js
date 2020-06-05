import React, { Component } from "react";
import "./App.css";
import axios from "axios";


class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios.get("http://localhost:4000/api/v1/todos").then((res) => {
      console.log(res);
      this.setState({
        todos: res.data
      });
    });
  }


  removeFromTodos = () => {
      
      axios.delete("http://localhost:4000/api/v1/todos/:id")
        .then((res) => {
          console.log(res);
          this.setState({
            todos: res.data
          })
        })
        .catch((error) => console.log(error));
    }



  render() {
    
    const { todos } = this.state;
    const todosList = todos.length ? (
      todos.map((post) => {
        return (
          <div key={todos.id}>
            <h1>{todos.title}</h1>
            <h3>{todos.body}</h3>
          </div>
        );
      })
    ) : (
      <div> empy </div>
    );

    return (
      <div className="App">
        <button onClick={()=>{this.removeFromTodos()}} >Delete</button>
        <h1>Todos list</h1>
        {todosList}
      </div>
    );
  }
}

export default App;
