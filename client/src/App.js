import React, { Component } from 'react';

import './App.css';
// import Header from './components/Header';
import FallacyList from './components/Fallacies/FallacyList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div style={{ backgroundColor: 'rgba(125,125,125,1)' }}>
        {/* <Header /> */}
        <FallacyList height={this.state.height} />
      </div>
    );
  }
}

export default App;
