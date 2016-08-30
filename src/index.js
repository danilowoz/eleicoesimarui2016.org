import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Content from './components/content'
import User from './components/user'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Content} />
      <Route path=':type' component={Content} />
      <Route path=':type/:id' component={User} />
    </Route>
  </Router>),
  document.getElementById('root')
)
