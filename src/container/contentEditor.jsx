import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageUpload from './imageUpload';

export default class ContentEditor extends Component {

  render() {
    return (
      <div>
        Cover Editor
        <ImageUpload/>
      </div>
    )
  }
};
