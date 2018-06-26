import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';
import imageUpload from './container/imageUpload';
import ContentEditor from './container/contentEditor';
import Auth from './Auth.js';
import { Navigation, Header, Layout, Drawer, Content } from 'react-mdl';
class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    // const { isAuthenticated } = this.props.auth;

    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link to="/"> Authorify</Link>} scroll>
            <Navigation>
              <Link to="/"> Home</Link>
              <Link to="/contentEditor"> Content Editor</Link>

            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <ContentEditor />
          </Content >
        </Layout>

      </div>
    )
  }
}

export default App;
