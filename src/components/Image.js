import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiKey from '../config.js'

class Images extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps (nextProps) {
    
  }

  render() {
    return (
      <div className="image">
        <img src={this.props.url} />
      </div>
    );
  }
}

Images.propTypes = {
  url: PropTypes.string.isRequired
}

export default Images;