import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Layout } from 'antd';
import HomeView from 'src/components/routes/HomeView';
import TestView from 'src/components/routes/TestView';
import ResultsView from 'src/components/routes/ResultsView';
import ImprovementsView from 'src/components/routes/ImprovementsView';
import ScrollToTop from 'src/components/ScrollToTop';
import { HeartFilled } from '@ant-design/icons';
import mappedin from 'public/assets/mappedin-logo-white.svg';
import './App.css';

const { Header, Content, Footer } = Layout;

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
  const [chairQuestionResults, setChairQuestionResults] = useState({});
  const [monitorQuestionResults, setMonitorQuestionResults] = useState({});
  const [accessoriesQuestionResults, setAccessoriesQuestionResults] = useState(
    {}
  );
  const [healthQuestionResults, setHealthQuestionResults] = useState({});

  const handleFormDataUpdate = (questionType, questionsData) => {
    console.log('questionType: ', questionType);
    console.log('questionsData: ', questionsData);
    switch (questionType) {
      case 'Chair':
        setChairQuestionResults(questionsData);
        setChairScore(calculateScore(Object.values(questionsData)));
        break;
      case 'Monitor':
        setMonitorQuestionResults(questionsData);
        setMonitorScore(calculateScore(Object.values(questionsData)));
        break;
      case 'Accessories':
        setAccessoriesQuestionResults(questionsData);
        setAccessoriesScore(calculateScore(Object.values(questionsData)));
        break;
      case 'Health':
        setHealthQuestionResults(questionsData);
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content="ErgoRank" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="An ergonomic assessment tool that helps you optimize your workspace setup"
        />
        <meta property="og:image" content="https://i.imgur.com/aUgQhDV.png" />
        <meta property="og:url" content="https://ergorank.com/" />
      </Helmet>
      <Router>
        <ScrollToTop />
        <Layout style={{ minHeight: '100vh' }}>
          <Header className="header">
            <Link className="logo-link" to="/">
              ErgoRank
            </Link>
          </Header>
          <Content className="content">
            <Switch>
              <Route path="/improvements">
                <ImprovementsView
                  chairFeetSupported={parseInt(
                    chairQuestionResults.chairFeetSupported,
                    10
                  )}
                  chairBackSupported={parseInt(
                    chairQuestionResults.chairBackSupported,
                    10
                  )}
                  chairArmrestAdjustable={parseInt(
                    chairQuestionResults.chairArmrestAdjustable,
                    10
                  )}
                  monitorPosition={parseInt(
                    monitorQuestionResults.monitorPosition,
                    10
                  )}
                  monitorHeight={parseInt(
                    monitorQuestionResults.monitorHeight,
                    10
                  )}
                  monitorGlare={parseInt(
                    monitorQuestionResults.monitorGlare,
                    10
                  )}
                  accessoryHeight={parseInt(
                    accessoriesQuestionResults.accessoryHeight,
                    10
                  )}
                  accessoryDistance={parseInt(
                    accessoriesQuestionResults.accessoryDistance,
                    10
                  )}
                  accessoryPosition={parseInt(
                    accessoriesQuestionResults.accessoryPosition,
                    10
                  )}
                  healthEyeBreaks={parseInt(
                    healthQuestionResults.healthEyeBreaks,
                    10
                  )}
                  healthPhysicalBreaks={parseInt(
                    healthQuestionResults.healthPhysicalBreaks,
                    10
                  )}
                  healthLightLevel={parseInt(
                    healthQuestionResults.healthLightLevel,
                    10
                  )}
                />
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
              <Route path="/test">
                <TestView onChange={handleFormDataUpdate} />
              </Route>
              <Route path="/">
                <HomeView />
              </Route>
            </Switch>
          </Content>
          <Footer className="footer">
            <span>
              <span className="footer-text">Built with&nbsp;</span>
              <HeartFilled style={{ color: '#f5222d' }} />
              <span className="footer-text">&nbsp;at&nbsp;</span>
              <a href="https://mappedin.com/">
                <img src={mappedin} alt="mappedin" className="mappedin-logo" />
              </a>
            </span>
          </Footer>
        </Layout>
      </Router>
    </>
  );
};

export default hot(module)(App);
