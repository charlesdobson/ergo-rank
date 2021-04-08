import { ReactElement } from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import { useGlobalStyles } from 'hooks';
import { Footer, Topbar } from 'components';
import { ROUTE } from 'constants/routes';
import HomeView from './HomeView';
import ProfileView from './ProfileView';

const ViewsWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-flow: column nowrap;
`;

const RouteWrapper = styled.div`
  flex-grow: 1;
`;

const Views = (): ReactElement => {
  const GlobalStyles = () => useGlobalStyles();

  return (
    <>
      <Global styles={GlobalStyles} />
      <ViewsWrapper>
        <Topbar />
        <RouteWrapper>
          <Switch>
            <Route exact path={ROUTE.HOME}>
              <HomeView />
            </Route>
            <Route path={ROUTE.PROFILE}>
              <ProfileView />
            </Route>
          </Switch>
        </RouteWrapper>
        <Footer />
      </ViewsWrapper>
    </>
  );
};

export default Views;
