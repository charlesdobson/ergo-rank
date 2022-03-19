import { memo, ReactElement } from 'react';
import styled from '@emotion/styled';

const Text = styled.h3`
  color: var(--cyan-7);
  .dark-mode & {
    color: var(--cyan-5);
  }
  font-size: 18px;
  font-weight: 400;
  padding: 0;
`;

interface IQuestionNumberProps {
  current: number;
  total: number;
}
const QuestionNumber = memo(
  ({ current, total }: IQuestionNumberProps): ReactElement => {
    return <Text>{`Question ${current} of ${total}`}</Text>;
  }
);

export default QuestionNumber;
