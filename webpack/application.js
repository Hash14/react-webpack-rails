import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Contact from './components/contact.js'
import Home from './components/home.js'
import About from './components/about.js'

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

render(
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
          </Route>
        </Router>, document.getElementById("root"))
