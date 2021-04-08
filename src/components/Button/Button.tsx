import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IButtonProps {
  primary?: boolean;
}
const Button = styled.button<IButtonProps>`
  padding: 0.6rem 1.2rem;
  width: max-content;
  white-space: nowrap;
  border-radius: var(--border-radius);
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

  background: transparent;
  border: 1px solid var(--cyan-7);
  color: var(--cyan-7);

  :hover {
    border: 1px solid var(--cyan-6);
    color: var(--cyan-6);
    cursor: pointer;
  }

  :active {
    border: 1px solid var(--cyan-8);
    color: var(--cyan-8);
  }

  ${(props) =>
    props.primary &&
    css`
      background: var(--cyan-7);
      border: 1px solid transparent;
      color: var(--gray-1);

      :hover {
        background: var(--cyan-6);
        border: 1px solid transparent;
        color: var(--gray-1);
      }

      :active {
        background: var(--cyan-8);
      }
    `}
`;

export default Button;
