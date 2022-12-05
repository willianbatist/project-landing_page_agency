import styled from "styled-components";

export const Services = styled.div`
  display: flex;
  justify-content: space-around;
  border: 2px solid black;
  background-color: #fafafa !important;

  .divApiServices {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 2px solid orange;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 90%;
  }
`;

export const ServiceCard = styled.div`
  border: 2px solid red;
  width: 300px;
  height: 300px;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.5px;

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
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;