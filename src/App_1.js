import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [
        {name: "Frank", 
          id: "One"
        },
        {name: "Bill", 
          id: "Two"
        },
        {name: "Taylor", 
          id: "Three"
        },
        {name: "Mark", 
          id: "Four"
        },
        {name: "Ram", 
          id: "Five"
        }
      ]
    };

  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {
           this.state.monsters.map(monster => (
               <h1 key = {monster.id}>{monster.name} </h1> 
            ))
          }
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}

export default App;
