import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from 'src/components/NavBar/';
import Footer from 'src/components/Footer';
import HomeView from 'src/components/routes/HomeView';
import TestView from 'src/components/routes/TestView';
import ResultsView from 'src/components/routes/ResultsView';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/test">
          <TestView />
        </Route>
        <Route path="/results">
          <ResultsView />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default hot(module)(App);
