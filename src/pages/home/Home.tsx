import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import * as S from "./home.style";
import imgOffice from "../../img/marketing-office.jpg";

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
    </S.HomeContainer>
  );
}
