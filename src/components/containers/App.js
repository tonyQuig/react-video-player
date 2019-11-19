import React from 'react';
import TqPlayer from './TqPlayer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path='/' component={TqPlayer} />
        <Route exact path='/:activeVideo' component={TqPlayer} />
      </Switch>
      <GlobalStyle />
    </>
  </BrowserRouter>
)

export default App;