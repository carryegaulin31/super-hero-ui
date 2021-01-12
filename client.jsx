import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorPage from './pages/Error'
import HeroesPage from './pages/Heroes'
import Teams from './pages/Teams'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/heroes" component={HeroesPage} />
      <Route exact path="/" component={Teams} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
