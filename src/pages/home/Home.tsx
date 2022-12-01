import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import Services from "../../components/service/Services";
import Pricing from "../../components/pricing/Pricing";
import * as S from "./home.style";
import imgOffice from "../../img/marketing-office.jpg";
import desktop1 from "../../img/desktop1.jpg";
import desktop2 from "../../img/desktop2.jpg";

export default function Home() {
  return (
    <S.HomeContainer>
      <Header />
      <div>
        <img
          width="100%"
          alt="Pessoas fazendo reunião numa mesa"
          src={imgOffice}
        />
        <h1>Digital Product Agency.</h1>
        <p>Look no further. You came to the right ... place</p>
      </div>
      <Products />
      <S.Section>
        <div>
          <img alt="imagem de um computador ligado" src={desktop1} />
        </div>
        <div>
          <img alt="imagem de um computador ligado" src={desktop2} />
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
