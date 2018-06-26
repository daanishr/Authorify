import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageUpload from './imageUpload';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, red} from '@material-ui/core/colors/';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue
  },
});
export default class ContentEditor extends Component {

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            
            <Route path='/contentEditor' component={ImageUpload}/>
            
            </Switch>

        </MuiThemeProvider>
      </div>
    )
  }
};
