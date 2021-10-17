import { ReactElement } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { ROUTE } from 'constants/routes';
import { Button, Card, ViewWrapper } from 'components';
import { WORK_ENVIRONMENTS, useWorkEnvironmentContext } from 'contexts';
import BREAKPOINTS from 'constants/breakpoints';
import { BUTTON_VARIANT } from 'components/Button/Button';

const Question = styled.h2`
  color: var(--blueGray-8);
  .dark-mode & {
    color: var(--blueGray-2);
  }
  font-weight: 500;
  font-size: 30px;
  @media ${BREAKPOINTS.MOBILE} {
    font-size: 18px;
  }
  text-align: center;
  margin-bottom: 4rem;
`;

const WorkEnvironmentsGroup = styled.div`
  flex-grow: 1;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 4em 4em;
`;

interface IWorkEnvironmentCardProps {
  isSelected: boolean;
}
const WorkEnvironmentCard = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<IWorkEnvironmentCardProps>`
  all: unset;
  width: 10rem;
  height: 10rem;
  @media ${BREAKPOINTS.MOBILE} {
    width: 7rem;
    height: 7rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: var(--border-radius);

  background: ${(props) =>
    props.isSelected ? 'var(--cyan-1)' : 'var(--blueGray-2)'};
  .dark-mode & {
    background: ${(props) =>
      props.isSelected ? 'var(--blueGray-6)' : 'var(--blueGray-8)'};
  }
  color: var(--blueGray-8);
  .dark-mode & {
    color: var(--blueGray-2);
  }
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  :hover {
    transition: all 0.1s ease-in-out;
  }

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 4vh;
  right: 2vw;

  @media ${BREAKPOINTS.MOBILE} {
    position: static;
  }
`;

// TODO: Figure out how to map enum key/value
const WorkEnvironments = [
  {
    name: WORK_ENVIRONMENTS.DESK,
  },
];

const ProfileView = (): ReactElement => {
  const {
    state: { selectedWorkEnvironment },
    setState: setSelectedWorkEnvironment,
  } = useWorkEnvironmentContext();
  const history = useHistory();

  const onSelectWorkEnvironment = (name: WORK_ENVIRONMENTS) => {
    setSelectedWorkEnvironment((prevState) => ({
      ...prevState,
      selectedWorkEnvironment:
        selectedWorkEnvironment === name ? WORK_ENVIRONMENTS.NONE : name,
    }));
  };

  const onBeginAssessmentClick = () => {
    if (selectedWorkEnvironment !== WORK_ENVIRONMENTS.NONE) {
      history.push(ROUTE.TEST);
    }
  };

  return (
    <ViewWrapper>
      <Card>
        <Question>Which work environment best resembles your own?</Question>
        <WorkEnvironmentsGroup>
          {WorkEnvironments.map((environment) => (
            <WorkEnvironmentCard
              isSelected={selectedWorkEnvironment === environment.name}
              onClick={() => onSelectWorkEnvironment(environment.name)}
            >
              {environment.name}
            </WorkEnvironmentCard>
          ))}
        </WorkEnvironmentsGroup>
        <StyledButton
          variant={BUTTON_VARIANT.OUTLINE}
          onClick={onBeginAssessmentClick}
        >
          Begin Assessment
        </StyledButton>
      </Card>
    </ViewWrapper>
  );
};

export default ProfileView;
