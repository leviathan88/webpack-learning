import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';

class App extends Component {
  render() {
    return (
      <h1 className="title">Go back to school divine no more</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app') )
