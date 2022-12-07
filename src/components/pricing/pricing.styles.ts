import styled from "styled-components";

export const Pricing = styled.div`
  background-color: #fafafa;
  height: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .divApiPricing {
    background-color: #fafafa;
    display: flex;
    max-width: 900px;
    height: 90%;
    align-items: center;
  }

  @media(max-width: 770px) {
  height: 1000px;
  .divApiPricing {
    display: block;
  }
}
`;

export const PriceCard = styled.div`
  background-color: white;
  max-width: 700px;
  height: 50%;
  margin: 80px 10px 60px 10px;
  padding: 70px 45px;

  h3 {
    font-size: 22px;
    font-weight: 700;
    color: #515769;
    line-height: 1.4;
    margin: 0 0 15px;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    color: #a6a7aa;
    margin-top: 25px;
    margin-bottom: 15px;
  }

  ul {
    margin-top: 25px;
    margin-bottom: 50px;
    height: 200px;
    padding-left: 0;
    list-style: none;
  }

  ul li {
    position: relative;
    font-size: 13px;
    color: #81848f;
    padding-left: 20px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  a {
    font-size: 13px;
    font-weight: 600;
    padding: 15px 40px;
    color: #515769;
    background: #f3f4f5;
    border-color: transparent;
    border-width: 0;
  }

  a:hover {
    cursor: pointer;
    background-color: #17bed2;
    color: white;
    transition-duration: .4s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.7,1,.7,1);
  }

  @media(max-width: 770px) {
  height: 80px;

  h3 {
    margin-top: -50px;
    font-size: 18px;
  }

  p {
    font-size: 11px;
    margin-top: 0px;
  }
  ul {
    margin-top: 0px;
    margin-bottom: -10px;
    height: 80px;
  }
  ul li {
    font-size: 9px;
  }

  a {
    font-size: 9px;
    padding: 9px 32px;
    margin-top: 0px;
  }
}
`;