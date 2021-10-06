import React, { createContext } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FactsBlock from './components/FactsBlock/FactsBlock';
import './assets/colors.css';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import TestSite from './pages/TestSite';
import { StyledApp, StyledContent } from './AppStyles';
import Weather from './pages/Weather';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import { isMobile } from './customHooks/useBreakpoint';

export const BreakPointContext = createContext(false);
function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <Router>
      <BreakPointContext.Provider value={isMobile()} >
      <StyledApp breakpoint={isMobile()}>
      <Navbar />
      <StyledContent>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/page1">
          <Dogs />
        </Route>
        <Route exact path="/page2">
          <Cats />
        </Route>
        <Route exact path="/page3">
          <Weather />
        </Route>
        <Route exact path="/siteddddd4">
          <TestSite />
        </Route>
      </Switch>
      </ StyledContent>
      </StyledApp>
    </BreakPointContext.Provider>
    </Router>
    
    </>
  );
}

export default App;
