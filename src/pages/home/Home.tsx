import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import Services from "../../components/service/Services";
import * as S from "./home.style";
import imgOffice from "../../img/marketing-office.jpg";
import desktop1 from "../../img/desktop1.jpg";
import desktop2 from "../../img/desktop2.jpg";

export default function Home() {
  return (
    <S.HomeContainer className="main">
      <Header />
      <div>
        <img
          width="100%"
          alt="Pessoas fazendo reunião numa mesa"
          src={imgOffice}
        />
      </div>
      <h1>Digital Product Agency.</h1>
      <p>Look no further. You came to the right ... place</p>
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
    </S.HomeContainer>
  );
}
