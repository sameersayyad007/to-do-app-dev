import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import ListItem from './ListItem';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       item:[],
       currentItem:{
        text:'',
        key:''

       }
    }
    this.handleInput= this.handleInput.bind(this)
    this.addItem= this.addItem.bind(this)
  }


  handleInput(e){
    this.setState({
      currentItem:{
    
      text: e.target.value,
      key: Date.now()
      }
    
    })
    
  }

  addItem(e){
  e.preventDefault();
  const newItem= this.state.currentItem
  console.log(newItem)
  if(newItem.text!==''){
    const newTtems= [...this.state.items, newItem];
    this.setState({
      items :  newItem ,
      currentItem:{
        text:'',
        key:''
      }
    })
  }
  }
  
  render() {
    return (
      <div className="App">
    
    <header>
      <form id='to-do-form' onSubmit={this.addItem}>
        <br />
        <input type="text" name="" id="" placeholder='enter text' value={this.state.currentItem.text} onChange={this.handleInput} />
        <button type='submit'>Add</button>
      </form>
    </header>


    <ListItem items= {this.state.items}></ListItem>
    </div>
    )
  }
}


