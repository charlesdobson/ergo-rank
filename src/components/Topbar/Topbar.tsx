import { ReactElement } from 'react';
import styled from '@emotion/styled';
import { ROUTE } from 'constants/routes';

const Wrapper = styled.div`
  height: 9vh;
  background: var(--cyan-8);

  padding: 0 2rem;

  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  all: unset;
  color: var(--gray-1);
  font-size: 1.4rem;
  font-weight: 600;

  :hover {
    cursor: pointer;
  }
`;

const Topbar = (): ReactElement => {
  return (
    <Wrapper>
      <Logo href={ROUTE.HOME}>ErgoRank</Logo>
    </Wrapper>
  );
};

export default Topbar;
