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
      { Name: 'Add', Phone: '00000000', id: 1 },
      { Name: 'And', Phone: '11111111', id: 2 },
      { Name: 'Delete', Phone: '22222222', id: 3 }
    ]
  }

  Delete = (id) => {
    this.setState({subs : [...this.state.subs.filter(sub => sub.id !== id)]})
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
        <Sublist subs = {this.state.subs} Delete = {this.Delete} />
      </div>
    );
  }
}

export default App;
