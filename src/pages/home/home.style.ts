import styled from "styled-components";
import Img from "../../img/marketing-office.jpg";

export const HomeContainer = styled.div`

.divImgBackgroud {
  background: url(${Img}) center center no-repeat;
  width: 100%;
  height: auto;
  background-size: cover;
  padding: 250px 0 200px;
}

.divTitleHome {
  width: 100%;
  z-index: 1;
  text-align: center;
}

.imgBackgroud {
  z-index: -1;
  filter: blur(2px);
  width: 100%;
  height: 699px;
}

.titleHome {
  border: black;
  font-weight: 700;
  font-size: 70px;
  color: white;
  text-shadow: 3px 3px 4px rgba(0,0,0,0.71);
}

.pHome {
  font-size: 25px;
  font-weight: 400;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: white;
  text-shadow: 3px 3px 4px #000000;
}
`;

export const Section = styled.section``;

export const Div = styled.div`
`;
