import React, { Component } from 'react';
import { render } from 'react-dom';
import { Dropdown } from './Dropdown.js';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: 'dropdown'
    };

    this.handleShow = this.handleShow.bind(this);
  }

  render() {
    return (
      <div>
        <a>
          <h1>React Application using Web Components</h1>
        </a>

        <p>
          {this.state.show ? 'open' : 'closed'}
        </p>

        <Dropdown title={this.state.title} onShow={this.handleShow}>
          Hello from dropdown
        </Dropdown>
      </div>
    );
  }

  handleShow(e) {
    console.log(e.detail)
    this.setState({ show: e.detail });
  }
}

render(<App />, document.getElementById('root'));
