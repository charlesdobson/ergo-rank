import { ReactElement } from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import { useGlobalStyles } from 'hooks';
import { Topbar } from 'components';
import { ROUTE } from 'constants/routes';
import { ThemeContextProvider } from 'contexts';
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

interface IContextProvidersProps {
  children: React.ReactNode[];
}
const ContextProviders = ({ children }: IContextProvidersProps) => (
  <ThemeContextProvider>{children}</ThemeContextProvider>
);

const Views = (): ReactElement => {
  const GlobalStyles = () => useGlobalStyles();

  return (
    <ContextProviders>
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
        {/* <Footer /> */}
      </ViewsWrapper>
    </ContextProviders>
  );
};

export default Views;
