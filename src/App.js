import React, { Component } from 'react';
import './App.css';
import {Hero, Agencies, Information} from './Components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>The Brand</h1>
          {/* <nav></nav> */}
        </header>
        <Hero/>
        <Agencies/>
        <Information/>
      </div>
    );
  }
}

export default App;
