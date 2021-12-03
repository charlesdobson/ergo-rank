/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';
import styled from '@emotion/styled';
import QuestionNumber from './QuestionNumber';
import Question from './Question';
import { QUESTIONS_MAP, useAssessmentContext } from 'contexts';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 36%;
`;

const QuestionGroup = (): ReactElement => {
  const {
    state: {
      current: { category, question },
    },
  } = useAssessmentContext();

  return (
    <Wrapper>
      <QuestionNumber
        key={question}
        current={Object.keys(QUESTIONS_MAP[category]).indexOf(question) + 1}
        total={Object.keys(QUESTIONS_MAP[category]).length}
      />
      <Question content={(QUESTIONS_MAP as any)[category][question]} />
    </Wrapper>
  );
};

export default QuestionGroup;
