import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FactsBlock from './components/FactsBlock/FactsBlock';
import './assets/colors.css';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import TestSite from './pages/TestSite';
import { StyledApp, StyledContent } from './AppStyles';
import Weather from './pages/Weather';

function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <Router>
      <StyledApp>
      <Navbar />
      <StyledContent>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/page2">
          <Weather />
        </Route>
        <Route exact path="/page3">
         <TestSite />
        </Route>
        <Route exact path="/siteddddd4">
          <TestSite />
        </Route>
      </Switch>
      </ StyledContent>
      </StyledApp>
    </Router>
    
    </>
  );
}

export default App;
