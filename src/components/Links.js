import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="links">
        <ul>
            <li>
                <Link to="/search/phone">Phone</Link>
            </li>
            <li>
                <Link to="/search/computers">Computers</Link>
            </li>
            <li>
                <Link to="/search/servers">Servers</Link>
            </li>
        </ul>
      </div>
    );
  }
}

Search.propTypes = {
  doSearch: PropTypes.func.isRequired
}

export default Search;