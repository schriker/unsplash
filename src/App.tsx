import React from 'react';
import HomePage from 'pages/home/HomePage';
import SearchPage from 'pages/search/SearchPage';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Switch>
          <Route path="/search/:query">
            <SearchPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  );
};

export default App;
