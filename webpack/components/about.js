import React, { Component } from 'react'
import { render } from 'react-dom'

export default class About extends Component {
  render() {
      return (
        <div>
          <h2>About Us</h2>
          <p>We are a software company working on cutting edge technology.</p>
          <ol>
            <li>Quality</li>
            <li>Customer satisfaction</li>
            <li>Awesome</li>
            <li>Cool</li>
            <li>Fun to work</li>
          </ol>
        </div>
      );
    }
}