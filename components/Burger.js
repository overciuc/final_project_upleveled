import { css } from '@emotion/react';

const burgerStyle = (open) => css`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 30px;
  right: 24px;
  display: flex;
  justify-content: space-around;
  z-index: 1300;
  display: none;

  @media only screen and (max-width: 900px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${open ? '#fff' : '#fff'};
    border-radius: 12px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-of-type(1) {
      transform: ${open ? 'rotate(45deg)' : 'rotate(0deg)'};
    }
    &:nth-of-type(2) {
      transform: ${open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${open ? 0 : 1};
    }
    &:nth-of-type(3) {
      transform: ${open ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
  }
`;

export default function Burger(props) {
  return (
    <div
      css={burgerStyle(props.open)}
      onClick={() => props.setOpen(!props.open)}
      onKeyDown={() => props.setOpen(!props.open)}
      role="button"
      tabIndex={0}
    >
      <div />
      <div />
      <div />
    </div>
  );
}
