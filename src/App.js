/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import Add from './components/Add';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <Add />
      </div>
    );
  }
}

export default App;
