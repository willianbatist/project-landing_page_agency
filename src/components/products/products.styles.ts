import styled from "styled-components";

export const Products = styled.section`
  border: 2px solid black;
  width: 100%;
  h2 {
    font-size: 30px;
    font-weight: 700;
    color: #515769;
    line-height: 1.4;
    margin: 0 0 15px;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    width: 60%;
  }

  .divTextProducts {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    border: 2px solid red;
    padding: 2em;
  }

  .divProductsCard {
    display: flex;
  }

  @media(max-width: 770px) {
  .divProductsCard {
    display: block;
  }
}
`;

export const ProductCard = styled.section`
  border: 2px solid orange;
  padding: 1em;
  img {
    max-width: 100%;
    height: auto;
  }

  h4 {
    font-size: 22px;
    margin-block-start: 0.8em;
    margin-block-end: 0.8em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h4 a {
    color: #515769;
  }
  h4 a:hover {
    color: #81848f;
  }

  h4 span {
    margin-left: 20px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
    color: #bfc1c7;
  }
`;
