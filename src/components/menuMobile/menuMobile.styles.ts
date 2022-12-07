import styled, { css } from "styled-components";

interface Props {
  isVisible: boolean;
}

export const Container = styled.section<Props>`
  display: none;
  background-color: white;


  ${({ isVisible }) => isVisible && css`
      display: block !important;
      a {
        text-decoration: none;
        display: block;
        padding: 10px;
        margin-left: 2%;
        font-family: Hind,sans-serif;
        color: #515769;
        font-size: 15px;
        font-weight: 600;
        transition: 0.3s;
        text-transform: uppercase;
      }

      a:hover {
          color: #17bed2;
          text-shadow: none;
      }
  `}
`;