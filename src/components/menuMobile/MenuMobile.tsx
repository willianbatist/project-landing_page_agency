import * as S from "./menuMobile.styles";

interface Props {
  menuIsVisible: boolean;
}

export default function MenuMobile({ menuIsVisible }: Props) {
  return (
    <S.Container isVisible={menuIsVisible}>
      <nav className="mobNav">
        <a className="mobA" href="#home">
          HOME
        </a>
        <a className="mobA" href="#products">
          PRODUCTS
        </a>
        <a className="mobA" href="a">
          SERVICE
        </a>
        <a className="mobA" href="a">
          WORK
        </a>
        <a className="mobA" href="a">
          PRICING
        </a>
        <a className="mobA" href="a">
          CONTACT
        </a>
      </nav>
    </S.Container>
  );
}
