import React, { Component } from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Search from './components/Search'
import Links from './components/Links'
import Images from './components/Images'

class App extends Component {
  constructor(props) {
    super(props);
    /* this.state = {
        query: ''
    }; */   

    this.doSearch = this.doSearch.bind(this);
  }

  componentDidMount() {
    this.setState({
      query: ''
    });
  }

  doSearch (q) {
    console.log('doing search...')
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/search" render={ ({match}) => 
            <Search doSearch={this.doSearch}></Search>
          } />
          <Links doSearch={this.doSearch}></Links>
          <Route path="/search/:query" render={ ({match}) => 
            <Images query={match.params.query}></Images>
          } />
          <Route exact path="/" render={ ({match}) => 
            <Images query={"Hiking"}></Images>
          } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
