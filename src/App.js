/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import Add from './components/Add';
import Sublist from './components/Sublist';
import uuid from 'uuid';



class App extends Component {

  state = {
    subs: [
      { Name: 'ram', Phone: '10101010', id: 1 },
      { Name: 'sam', Phone: '11111111', id: 2 },
      { Name: 'dam', Phone: '20202020', id: 3 }
    ]
  }

  AddSub = (Name,Phone)=>{
    const newSub = {
      Name, Phone, id: uuid.v4()
    }
    this.setState({subs : [...this.state.subs,newSub]})
  }
  render() {
    return (
      <div className="App">
        <Title/>
        <Add AddSub = {this.AddSub}/>
        <Sublist subs = {this.state.subs}/>
      </div>
    );
  }
}

export default App;
