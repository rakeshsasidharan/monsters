import React,{ Component } from 'react';
import {CardList} from './Components/CardList/card-list.component';
import {SearchBox} from './Components/SearchBox/searchBox.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
        monsters:[]
      , search:''
    };
    this.handleChange = this.handleChange.bind(this);
}

  componentDidMount(){
  fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user=> this.setState({monsters:user}))
  }

  handleChange = function(e){
    this.setState({search: e.target.value})
  }

  render() {  
    const {monsters, search} = this.state ; 
    const filteredMonster = monsters.filter(monster=>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters University</h1>
        <SearchBox placeholder ="Search Monsters" changeHandler = {this.handleChange} ></SearchBox>
        <CardList monsters= {filteredMonster}></CardList>
    </div>
    )
  }
}

export default App;
