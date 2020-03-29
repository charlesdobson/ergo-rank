import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from 'src/components/NavBar/';
import Footer from 'src/components/Footer';
import HomeView from 'src/components/routes/HomeView';
import TestView from 'src/components/routes/TestView';
import ResultsView from 'src/components/routes/ResultsView';
import './App.css';

const calculateScore = values => {
  let score = 0;
  values.forEach(value => {
    score += parseInt(value, 10);
  });
  score /= values.length;

  return score;
};

const App = () => {
  const [score, setScore] = useState(0);
  const [chairScore, setChairScore] = useState(0);
  const [monitorScore, setMonitorScore] = useState(0);
  const [accessoriesScore, setAccessoriesScore] = useState(0);
  const [healthScore, setHealthScore] = useState(0);
  // const [chairQuestionResults, setChairQuestionResults] = useState({});
  // const [monitorQuestionResults, setMonitorQuestionResults] = useState({});
  // const [accessoriesQuestionResults, setAccessoriesQuestionResults] = useState(
  //   {}
  // );
  // const [healthQuestionResults, setHealthQuestionResults] = useState({});

  const handleFormDataUpdate = (questionType, questionsData) => {
    console.log('questionType: ', questionType);
    console.log('questionsData: ', questionsData);
    switch (questionType) {
      case 'Chair':
        // setChairQuestionResults(questionsData);
        setChairScore(calculateScore(Object.values(questionsData)));
        break;
      case 'Monitor':
        // setMonitorQuestionResults(questionsData);
        setMonitorScore(calculateScore(Object.values(questionsData)));
        break;
      case 'Accessories':
        // setAccessoriesQuestionResults(questionsData);
        setAccessoriesScore(calculateScore(Object.values(questionsData)));
        break;
      case 'Health':
        // setHealthQuestionResults(questionsData);
        setHealthScore(calculateScore(Object.values(questionsData)));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setScore((chairScore + monitorScore + accessoriesScore + healthScore) / 4);
  });

  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/test">
          <TestView onChange={handleFormDataUpdate} />
        </Route>
        <Route path="/results">
          <ResultsView
            overallScore={score}
            chairScore={chairScore}
            monitorScore={monitorScore}
            accessoriesScore={accessoriesScore}
            healthScore={healthScore}
          />
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
