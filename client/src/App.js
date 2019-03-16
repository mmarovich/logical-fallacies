import React, { Component } from 'react';

import './App.css';
// import Header from './components/Header';
import FallacyList from './components/Fallacies/FallacyList';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <FallacyList />
      </div>
    );
  }
}

export default App;
