import React, { Component } from 'react';
import DOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>Go back to school</div>
    )
  }
}

DOM.render(<App />, document.querySelector("#react-target") )
