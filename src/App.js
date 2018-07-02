import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link , Router} from 'react-router-dom';
import ContentEditor from './container/topContentEditor/contentEditor';
import { Navigation, Header, Layout, Drawer, Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Header className="header-color" title={<Link to="/"> Authorify</Link>} scroll>
            <Navigation>
              <Link to="/"> Home</Link>
              <Link to="/contentEditor"> Content Editor</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            < ContentEditor/>
          </Content >
      </div>
    );
  }
}

export default App;
