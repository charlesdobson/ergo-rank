import { ReactElement } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  height: 9vh;
  background: var(--cyan-8);

  padding: 0 2rem;

  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  color: var(--gray-1);
  font-size: 1.4rem;
  font-weight: 600;
`;

const Topbar = (): ReactElement => {
  return (
    <Wrapper>
      <Logo>ErgoRank</Logo>
    </Wrapper>
  );
};

export default Topbar;
