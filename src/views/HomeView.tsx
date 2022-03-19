import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import useDarkMode from 'use-dark-mode';
import { ReactComponent as DeskLight } from 'assets/desk-light.svg';
import { ReactComponent as DeskDark } from 'assets/desk-dark.svg';
import { ReactComponent as Dots } from 'assets/dots.svg';
import { Button } from 'components';
import { ROUTE } from 'constants/routes';
import { useBreakpoints } from 'hooks';
import BREAKPOINTS from 'constants/breakpoints';

interface IHomeViewWrapper {
  isDarkMode: boolean;
}
const HomeViewWrapper = styled.div<IHomeViewWrapper>`
  height: 100%;

  @media ${BREAKPOINTS.MOBILE} {
    padding-top: 2rem;
  }

  transition: all 0.1s ease-in;

  background: var(--blueGray-1);
  .dark-mode & {
    background: var(--blueGray-10);
  }

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
`;

const StyledDots = styled(Dots)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.6rem;
  opacity: 0.7;
`;

interface IDeskSvgProps {
  isMobile: boolean;
}
const StyledDeskSVGLight = styled(DeskLight, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<IDeskSvgProps>`
  height: ${(props) => (props.isMobile ? '20vh' : '50vh')};
  width: auto;
  flex-basis: ${(props) => props.isMobile && '100%'};
`;

const StyledDeskSVGDark = styled(DeskDark, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<IDeskSvgProps>`
  height: ${(props) => (props.isMobile ? '20vh' : '50vh')};
  width: auto;
`;

interface IDescriptionProps {
  isMobile: boolean;
}
const Description = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<IDescriptionProps>`
  width: ${(props) => (props.isMobile ? '80vw' : '45vw')};
  display: flex;
  flex-flow: column nowrap;

  h2 {
    font-family: var(--font-family-primary);
    color: var(--blueGray-9);
    .dark-mode & {
      color: var(--blueGray-1);
    }
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.6rem;
    margin: 0;
    @media ${BREAKPOINTS.MOBILE} {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2.2rem;
    }
    padding-bottom: 2rem;
  }

  span {
    font-family: var(--font-family-secondary);
    color: var(--blueGray-7);
    .dark-mode & {
      color: var(--blueGray-1);
    }
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.6rem;
    @media ${BREAKPOINTS.MOBILE} {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3rem;
    }
    padding-bottom: 2rem;
  }

  strong {
    font-weight: 600;
  }
`;

const HomeView = (): ReactElement => {
  const history = useHistory();
  const { isMobile } = useBreakpoints();
  const { value: isDarkMode } = useDarkMode();

  const onButtonClick = () => {
    history.push(ROUTE.PROFILE);
  };

  return (
    <HomeViewWrapper isDarkMode={isDarkMode}>
      {isDarkMode ? (
        <StyledDeskSVGDark isMobile={isMobile} />
      ) : (
        <StyledDeskSVGLight isMobile={isMobile} />
      )}
      <Description isMobile={isMobile}>
        <h2>Do you want to be comfortable while you work?</h2>
        <span>
          So do we! That's why we created this{' '}
          <strong>ergonomic assessment</strong> tool.
        </span>
        <span>
          Whether you're setting up a work from home space, starting a new job,
          or have never done an ergonomic assessment before, ErgoRank can show
          you how to improve your setup!
        </span>
        <span>
          <strong>Take the test</strong>, make some <strong>adjustments</strong>
          , and see your <strong>ergonomic ranking</strong> climb!
        </span>
        <Button onClick={onButtonClick}>Get Started</Button>
      </Description>
      {!isMobile && <StyledDots />}
    </HomeViewWrapper>
  );
};

export default HomeView;
