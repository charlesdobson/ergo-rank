import { ReactElement } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  height: 10vh;
  /* background: var(--purple-10); */
  background: var(--blueGray-8);
  color: var(--blueGray-1);
  font-weight: 500;
  font-size: 0.9rem;

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    all: unset;
    cursor: pointer;

    :hover {
      color: var(--gray-1);
    }
  }
`;

const Footer = (): ReactElement => {
  return (
    <Wrapper>
      <span>
        Built with ♥️ by{' '}
        <a href="https://github.com/charlesdobson">Charlie Dobson</a>
      </span>
    </Wrapper>
  );
};

export default Footer;
