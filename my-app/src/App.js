import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { toDo } from './ToDos.json'
import Navigation from './components/navigation'

console.log(toDo);

class App extends Component {
  constructor(){
    super();
    this.state = {
      toDo
    }
  }

  render() {
    const ToDost = this.state.toDo.map((todo, i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4 Textbig ">
            <div className="card-header">
              <h3> {todo.title} </h3>
              <span className= "badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p> {todo.description} </p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation titulo="mi primer titulo"/>
        <img src={logo} className="App-logo" alt="logo" />

          <a href="" className= "text-white Textbig">

          </a>
        <div className="container">
          <div className="row mt-4">
            { ToDost }
          </div>
        </div>

      </div>
    );
  }
}

export default App;
