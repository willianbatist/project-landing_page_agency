import Header from "../../components/header/Header";
import { HomeContainer } from "./home.style";
import imgOffice from '../../img/marketing-office.jpg'

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <img alt="Pessoas fazendo reunião numa mesa" src={ imgOffice } />
      <h1>Digital Product Agency.</h1>
      <p>Look no further. You came to the right ... place</p>
    </HomeContainer>
  );
}
