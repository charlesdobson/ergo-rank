import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IButtonProps {
  primary?: boolean;
}
const Button = styled.button<IButtonProps>`
  padding: 0.6rem 2rem;
  width: max-content;
  white-space: nowrap;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 500;
  font-family: var(--font-family-secondary);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

  background: transparent;
  border: 1px solid var(--teal-7);
  color: var(--teal-7);

  :hover {
    border: 1px solid var(--teal-6);
    color: var(--teal-6);
    cursor: pointer;
  }

  :active {
    border: 1px solid var(--teal-8);
    color: var(--teal-8);
  }

  ${(props) =>
    props.primary &&
    css`
      background: var(--teal-7);
      border: 1px solid transparent;
      border: none;
      color: var(--blueGray-1);

      :hover {
        background: var(--teal-6);
        border: 1px solid transparent;
        border: none;
        color: var(--blueGray-1);
      }

      :active {
        border: none;
        background: var(--teal-8);
      }
    `}
`;

export default Button;
