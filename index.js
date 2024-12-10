import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import CodePage from './views/code-page'
import CodeRoom from './views/code-room'
import Netshade from './views/netshade'
import FoundPage from './views/found-page'
import ErrorPage from './views/error-page'
import Home from './views/home'
import Reddit from './views/reddit'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={CodePage} exact path="/code-page" />
        <Route component={CodeRoom} exact path="/code-room" />
        <Route component={Netshade} exact path="/netshade" />
        <Route component={FoundPage} exact path="/found-page" />
        <Route component={ErrorPage} path="**" />
        <Route component={Home} exact path="/" />
        <Route component={Reddit} exact path="/reddit" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
