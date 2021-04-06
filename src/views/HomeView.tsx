import { ReactElement } from 'react';
import styled from '@emotion/styled';

const Test = styled.p`
  color: var(--red-10);
`;

const HomeView = (): ReactElement => {
  return <Test>HomeView</Test>;
};

export default HomeView;
