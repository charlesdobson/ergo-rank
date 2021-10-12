import styled from '@emotion/styled';

const Card = styled.div`
  background: var(--blueGray-1);
  .dark-mode & {
    background: var(--blueGray-9);
  }

  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);

  width: 85%;
  height: 75%;

  position: relative;
  box-sizing: border-box;
  padding: 2rem;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default Card;
