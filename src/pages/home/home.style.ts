import styled from "styled-components";
import Img from "../../img/marketing-office.jpg";
import ImgSmartphone from "../../img/smartphone.jpg";

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

.divMidPage {
  display: flex;
  position: relative;
  z-index: 1;
  background: url(${ImgSmartphone}) center center no-repeat fixed;
  background-size: cover;
  min-height: 100%;
  height: 384px;
}

.divMidPageText {
  position: absolute;
  z-index: -1;
  background: rgba(81,87,105,.4);
  height: 100%;
  text-align: center;
}

.h2MidPage {
  font-size: 50px;
  color: #fff;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  margin-top: 100px;
}

.pMidPage {
  font-size: 20px;
  color: #fff;
  opacity: .8;
  font-weight: 400;
  margin-top: 15px;
}

@media(max-width: 770px) {
  .h2MidPage {
    margin-top: 15px;
  }
}
`;

export const Section = styled.section`
  display: flex;
  margin-top: 100px;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .sSectionDiv1 {
    padding-right: 4px;
  }

  .sSectionDiv2 {
    padding-left: 4px;
  }
  
  @media(max-width: 770px) {
  display: block;
  .sSectionDiv1 {
    padding-right: 0px;
  }

  .sSectionDiv2 {
    padding-left: 0px;
    margin-top: 10px;
  }
}
`;

export const Div = styled.div`
`;
