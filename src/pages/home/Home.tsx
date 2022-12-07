import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import Services from "../../components/service/Services";
import Pricing from "../../components/pricing/Pricing";
import Contact from "../../components/contact/Contact";
import * as S from "./home.style";
import desktop1 from "../../img/desktop1.jpg";
import desktop2 from "../../img/desktop2.jpg";

export default function Home() {
  return (
    <S.HomeContainer>
      <Header />
      <div id="home" className="divImgBackgroud">
        <div className="divTitleHome">
          <h1 className="titleHome">A sua agência digital</h1>
          <p className="pHome">
            Levar sua empresa mais longe não é complicado.
          </p>
        </div>
      </div>
      <Products />
      <S.Section>
        <div className="sSectionDiv1">
          <img
            className="sSectionImg1"
            alt="imagem de um computador ligado"
            src={desktop1}
          />
        </div>
        <div className="sSectionDiv2">
          <img
            className="sSectionImg2"
            alt="imagem de um computador ligado"
            src={desktop2}
          />
        </div>
      </S.Section>
      <Services />
      <div id="work" className="divMidPage">
        <div className="divMidPageText">
          <h2 className="h2MidPage">Entregamos resultados de verdade</h2>
          <p className="pMidPage">
            Impulsione suas vendas com um serviço completo de gerenciamento
            online da sua marca. Tudo que você precisa na palma da mão.
          </p>
        </div>
      </div>
      <Pricing />
      <Contact />
      <S.Footer>
        <p>
          {`Desenvolvido por `}
          <span>MK DIGITAL</span>
          {` © 2022`}
        </p>
      </S.Footer>
    </S.HomeContainer>
  );
}
