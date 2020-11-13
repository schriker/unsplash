import React from 'react';
import HomePage from 'pages/home/HomePage';
import SearchPage from 'pages/search/SearchPage';
import { HelmetProvider } from 'react-helmet-async';
import store from 'store/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
