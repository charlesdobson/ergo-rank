import { ReactElement } from 'react';
import styled from '@emotion/styled';
import { useRouteMatch } from 'react-router-dom';
import { ROUTE } from 'constants/routes';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as Moon } from 'assets/moon.svg';
import { ReactComponent as Sun } from 'assets/sun.svg';
import useDarkMode from 'use-dark-mode';
import BREAKPOINTS from 'constants/breakpoints';
import { TOPBAR_HEIGHT } from 'constants/global';

interface IWrapperProps {
  showBackground: boolean;
}
const Wrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'showBackground',
})<IWrapperProps>`
  height: ${TOPBAR_HEIGHT.DESKTOP};
  @media ${BREAKPOINTS.MOBILE} {
    height: ${TOPBAR_HEIGHT.MOBILE};
  }
  padding: 0.2rem 1rem;
  @media ${BREAKPOINTS.MOBILE} {
    padding: 0.8rem 1rem;
  }
  background: ${(props) =>
    props.showBackground
      ? 'linear-gradient(to right, var(--teal-7), var(--cyan-7))'
      : 'transparent'};
  box-shadow: ${(props) =>
    props.showBackground ? '0 2px 0 rgba(203, 213, 225, 0.2)' : 'none'};

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  width: inherit;
  box-sizing: border-box;
`;

const LogoWrapper = styled.a`
  text-decoration: none;

  svg {
    height: 1.5rem;
    @media ${BREAKPOINTS.MOBILE} {
      height: 1.2rem;
    }
    margin-right: 0.6rem;
  }

  span {
    font-weight: 700;
    font-size: 1.7rem;
    @media ${BREAKPOINTS.MOBILE} {
      font-size: 1.3rem;
    }
    color: var(--blueGray-1);
  }

  :hover {
    cursor: pointer;
  }
`;

const StyledMoon = styled(Moon)`
  cursor: pointer;
  height: 1.6rem;
  @media ${BREAKPOINTS.MOBILE} {
    height: 1.2rem;
  }
  transition: all 1s ease-in-out;
`;

const StyledSun = styled(Sun)`
  cursor: pointer;
  height: 1.6rem;
  @media ${BREAKPOINTS.MOBILE} {
    height: 1.2rem;
  }
`;

const Topbar = (): ReactElement => {
  const { toggle: darkModeToggle, value: isDarkMode } = useDarkMode();
  const isHome = Boolean(useRouteMatch({ path: `${ROUTE.HOME}`, exact: true }));

  return (
    <Wrapper showBackground={isHome}>
      <LogoWrapper href={ROUTE.HOME}>
        <Logo />
        <span>ErgoRank</span>
      </LogoWrapper>
      {isDarkMode ? (
        <StyledSun onClick={darkModeToggle} />
      ) : (
        <StyledMoon onClick={darkModeToggle} />
      )}
    </Wrapper>
  );
};
export default Topbar;
