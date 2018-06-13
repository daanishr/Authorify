import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import imageUpload from './container/imageUpload';
import ContentEditor from './container/contentEditor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Authorify</h1>
        </header>
          <ContentEditor/>
      </div>
    );
  }
}

export default App;
