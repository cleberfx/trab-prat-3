import React, { Component } from 'react';

import ShowSalary from './components/ShowSalary';

export default class App extends Component {
  render() {
    return (
      <div>
        <ShowSalary />
        <ShowSalary />
        <ShowSalary />
      </div>
    );
  }
}
