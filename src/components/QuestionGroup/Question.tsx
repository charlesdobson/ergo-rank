import { memo, ReactElement } from 'react';
import styled from '@emotion/styled';

const ContentWrapper = styled.div`
  height: 20vh;
  width: 100%;
  border-radius: var(--border-radius);
  background: linear-gradient(90deg, #ecfeff 0%, #cffafe 0.01%, #ecfeff 100%);
  margin: auto;
  box-sizing: border-box;
  padding: 1rem 4rem;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const Content = styled.p`
  color: var(--gray-8);
  font-weight: 500;
`;

interface IQuestionProps {
  content: string;
}
const Question = memo(
  ({ content }: IQuestionProps): ReactElement => {
    return (
      <ContentWrapper>
        <Content>{content}</Content>
      </ContentWrapper>
    );
  }
);

export default Question;
