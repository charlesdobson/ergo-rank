import { ReactElement } from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { useGlobalStyles } from 'hooks';
import { Footer, Topbar } from 'components';
import HomeView from './HomeView';

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
          <HomeView />
        </RouteWrapper>
        <Footer />
      </ViewsWrapper>
    </>
  );
};

export default Views;
