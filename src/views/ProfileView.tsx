import { ReactElement } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { ROUTE } from 'constants/routes';

const ProfileViewWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Question = styled.h2`
  margin-bottom: 4rem;
`;

const WorkEnvironments = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 4em 4em;
`;

const WorkEnvironmentCard = styled.button`
  all: unset;
  width: 10rem;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: var(--border-radius);
  background: var(--magenta-10);
  color: var(--gray-2);
  font-size: 24px;
  font-weight: 500;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  transition: all 0.1s ease-in-out;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const WORK_ENVIRONMENTS = [
  {
    name: 'Desk',
  },
  {
    name: 'Laptop',
  },
];

const ProfileView = (): ReactElement => {
  const history = useHistory();

  const onEnvironmentClick = () => {
    history.push(ROUTE.TEST);
  };

  return (
    <ProfileViewWrapper>
      <Question>Which work environment best resembles your own?</Question>
      <WorkEnvironments>
        {WORK_ENVIRONMENTS.map((environment) => (
          <WorkEnvironmentCard onClick={onEnvironmentClick}>
            {environment.name}
          </WorkEnvironmentCard>
        ))}
      </WorkEnvironments>
    </ProfileViewWrapper>
  );
};

export default ProfileView;
