import styled, { css } from "styled-components";

interface Props {
  isVisible: boolean;
}

export const Container = styled.section<Props>`
  margin-top: 50px;
  position: absolute;
  background: white;
  width: 100vw;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-50px);
  transition: .5s;
  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }
  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
    > svg {
      transform: rotate(0deg);
    }
    nav {
      transform: scale(1);
    }
  `}
`;