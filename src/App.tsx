import React from 'react';
import Home from 'pages/home/Home';
import Search from 'pages/search/Search';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Switch>
          <Route path="/search/:query">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  );
};

export default App;
