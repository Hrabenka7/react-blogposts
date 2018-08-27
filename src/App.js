import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'; // for using routing

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Blog />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
