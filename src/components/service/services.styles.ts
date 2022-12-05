import styled from "styled-components";

export const Services = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fafafa !important;

  .divApiServices {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
    max-width: 1000px;
  }
`;

export const ServiceCard = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  box-shadow: 8px 7px 13px -7px rgba(0,0,0,0.75);
  -webkit-box-shadow: 8px 7px 13px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: 8px 7px 13px -7px rgba(0,0,0,0.75);

  &:hover {
    transform: translate3d(0,0,0);
    transition-duration: .7s;
    transition-property: all;
    box-shadow: none;
    margin-top: -5px;
    background-color: #17bed2;

    h3 {
      color: #fff;
    }

    p {
      color: #fff;
    }
  }

  h3 {
    display: block;
    font-size: 22px;
    font-weight: 700;
    color: #515769;
    line-height: 1.4;
    margin: 0 0 15px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.4;
    color: #a6a7aa;
    display: block;
    margin-left: 20px;
  }
`;