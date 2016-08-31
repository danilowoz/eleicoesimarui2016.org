import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Cities from './components/cities'
import Content from './components/content'
import User from './components/user'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Cities} />
      <Route path=':city' component={Content} />
      <Route path=':city/:type/' component={Content} />
      <Route path=':city/:type/:id' component={User} />
    </Route>
  </Router>),
  document.getElementById('root')
)
