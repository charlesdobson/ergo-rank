import { memo, ReactElement } from 'react';

interface IQuestionProps {
  content: string;
}
const Question = memo(
  ({ content }: IQuestionProps): ReactElement => {
    return <div>{content}</div>;
  }
);

export default Question;
