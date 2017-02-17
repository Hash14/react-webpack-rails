import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Simple React example with Rails</h1>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

var Home = React.createClass({
  render: function() {
      return (
        <div>
          <h2>Hey there!</h2>
          <p>Welcome to our home page.</p>

          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
      );
    }
});

var About = React.createClass({
  render: function() {
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
});

var Contact = React.createClass({
  render() {
      return (
        <div>
          <h2>GOT QUESTIONS?</h2>
          <p>The easiest thing to do is join a chat from our <a href="http://hash14.com">webpage</a>.
          </p>
        </div>
      );
    }
});


render(
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
          </Route>
        </Router>, document.getElementById("root"))
