import styled from "styled-components";

export const Contact = styled.section`
  padding: 10px;

  hr {
    width: 100%;
  }
  h3 {
    color: #515769;
    margin: 15px 0 65px 0;
    font-size: 40px;
    text-align: center;
    font-weight: 500;
    line-height: 1.2;
  }

  p span {
    font-weight: bold;
    color: #17bed2;
    font-size: 16px;
  }

  .icon {
    color: #515769;
    line-height: 55px;
    font-size: 30px;
    padding: 10px;
  }

  .divContact {
    display: flex;
    justify-content: space-evenly
  }

  .divContact div {
    text-align: center;
  }

  @media(max-width: 770px) {
  h3 {
    font-size: 30px;
  }

  .divContact {
    display: block;
  }

  .divContact div {
    margin-top: 25px;
  }
}
`;
