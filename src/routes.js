import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import HomePage from './components/home/HomePage'
import UsersPage from './components/user/UsersPage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='users' component={UsersPage} />
  </Route>
)