import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { ReactComponent as Deck } from 'assets/desk.svg';
import { Button } from 'components';
import { ROUTE } from 'constants/routes';

const HomeViewWrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledDeskSVG = styled(Deck)`
  height: 65vh;
  width: auto;
`;

const Description = styled.div`
  width: 45vw;
  display: flex;
  flex-flow: column nowrap;

  h2 {
    color: var(--gray-10);
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 2.6rem;
    margin: 0;
    padding-bottom: 2rem;
  }

  span {
    color: var(--gray-10);
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.6rem;
    padding-bottom: 2rem;
  }

  strong {
    font-weight: 600;
  }
`;

const HomeView = (): ReactElement => {
  const history = useHistory();

  const onButtonClick = () => {
    history.push(ROUTE.PROFILE);
  };

  return (
    <HomeViewWrapper>
      <StyledDeskSVG />
      <Description>
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
        <Button primary onClick={onButtonClick}>
          Get Started
        </Button>
      </Description>
    </HomeViewWrapper>
  );
};

export default HomeView;
