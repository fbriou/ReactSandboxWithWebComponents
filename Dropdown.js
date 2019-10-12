import React, { Component } from 'react';
import 'web-component-essentials'; // a basic dropdown is included

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    this.dropdownRef.current.title = this.props.title;

    if (this.props.onShow) {
      this.dropdownRef.current.addEventListener('show', (e) => this.props.onShow(e));
    }
  }

  componentDidUpdate(props) {
    if (props.title !== this.props.title) {
      this.dropdownRef.current.title = props.title;
    }

    if (props.show !== this.props.show) {
      this.dropdownRef.current.show = props.show;
    }
  }

  render() {
    return (
      <x-dropdown ref={this.dropdownRef}>
        {this.props.children}
      </x-dropdown>
    )
  }
}