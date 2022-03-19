import styled from '@emotion/styled';
import { css } from '@emotion/react';

export enum BUTTON_VARIANT {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  DANGER = 'danger',
}

interface IButtonProps {
  variant?: BUTTON_VARIANT;
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
    props.variant === BUTTON_VARIANT.PRIMARY &&
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

  ${(props) =>
    props.variant === BUTTON_VARIANT.SECONDARY &&
    css`
      background: transparent;
      border: 2px solid var(--blueGray-5);
      color: var(--blueGray-5);

      :hover {
        border: 2px solid var(--blueGray-4);
        color: var(--blueGray-4);
      }

      :active {
        border: 2px solid var(--blueGray-4);
        color: var(--blueGray-4);
      }
    `}

  ${(props) =>
    props.variant === BUTTON_VARIANT.OUTLINE &&
    css`
      background: transparent;
      border: 1px solid var(--teal-7);
      color: var(--teal-7);

      :hover {
        border: 1px solid var(--teal-6);
        color: var(--teal-6);
      }

      :active {
        border: 1px solid var(--teal-6);
        color: var(--teal-6);
      }
    `}

    ${(props) =>
    props.variant === BUTTON_VARIANT.DANGER &&
    css`
      background: var(--red-6);
      border: 1px solid transparent;
      border: none;
      color: var(--blueGray-1);

      :hover {
        background: var(--red-5);
        border: 1px solid transparent;
        border: none;
        color: var(--blueGray-1);
      }

      :active {
        border: none;
        background: var(--red-5);
      }
    `}
`;

Button.defaultProps = { variant: BUTTON_VARIANT.PRIMARY };

export default Button;
