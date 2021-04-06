import { ReactElement } from 'react';
import { Global } from '@emotion/react';
import { useGlobalStyles } from 'hooks';
import HomeView from './HomeView';

const Views = (): ReactElement => {
  const GlobalStyles = () => useGlobalStyles();

  return (
    <>
      <Global styles={GlobalStyles} />
      <HomeView />
    </>
  );
};

export default Views;
