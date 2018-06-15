import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageUpload from './imageUpload';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, red} from '@material-ui/core/colors/';

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
        <h1>Cover Editor</h1>
        <MuiThemeProvider theme={theme}>
          <ImageUpload/>
        </MuiThemeProvider>
      </div>
    )
  }
};
