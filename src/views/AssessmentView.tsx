import { ReactElement } from 'react';
import {
  Button,
  Card,
  QuestionGroup,
  TestProgress,
  ViewWrapper,
} from 'components';
import { ReactComponent as BackIcon } from 'assets/back-icon.svg';
import { BUTTON_VARIANT } from 'components/Button/Button';
import styled from '@emotion/styled';
import {
  useAssessmentContext,
  getNextQuestion,
  TCurrent,
  EHealthQuestions,
} from 'contexts';

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  column-gap: 1.2rem;
`;

const AssessmentView = (): ReactElement => {
  const {
    state: {
      current: { category, question },
      results,
    },
    setState: setAssessmentState,
  } = useAssessmentContext();

  const onAnswerUpdate = (decision: boolean) => {
    let nextQuestion: TCurrent;
    if (question !== EHealthQuestions.LIGHT_LEVEL) {
      nextQuestion = getNextQuestion({ category, question } as TCurrent);
    }

    setAssessmentState((prevState) => ({
      ...prevState,
      current: {
        ...prevState.current,
        ...nextQuestion,
      },
      results: {
        ...prevState.results,
        [category]: {
          ...prevState.results[category],
          [question]: decision,
        },
      },
    }));
    console.log(results);
  };

  return (
    <ViewWrapper>
      <Card>
        <TestProgress />
        <Button variant={BUTTON_VARIANT.SECONDARY}>
          <BackIcon />
        </Button>
        <QuestionGroup />
        <ButtonGroup>
          <Button
            variant={BUTTON_VARIANT.DANGER}
            onClick={() => onAnswerUpdate(false)}
          >
            No
          </Button>
          <Button
            variant={BUTTON_VARIANT.PRIMARY}
            onClick={() => onAnswerUpdate(true)}
          >
            Yes
          </Button>
        </ButtonGroup>
      </Card>
    </ViewWrapper>
  );
};

export default AssessmentView;
