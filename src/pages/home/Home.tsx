import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import Services from "../../components/service/Services";
import Pricing from "../../components/pricing/Pricing";
import * as S from "./home.style";
import desktop1 from "../../img/desktop1.jpg";
import desktop2 from "../../img/desktop2.jpg";

export default function Home() {
  return (
    <S.HomeContainer>
      <Header />
      <div id="home" className="divImgBackgroud">
        <div className="divTitleHome">
          <h1 className="titleHome">Digital Product Agency.</h1>
          <p className="pHome">Look no further. You came to the right ... place</p>
        </div>
      </div>
      <Products />
      <S.Section>
        <div>
          <img className="apagarIsso" alt="imagem de um computador ligado" src={desktop1} />
        </div>
        <div>
          <img className="apagarIsso" alt="imagem de um computador ligado" src={desktop2} />
        </div>
      </S.Section>
      <Services />
      <div className="divMidPage">
        <h2>Displaying the Result</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo.
        </p>
      </div>
      <Pricing />
    </S.HomeContainer>
  );
}
