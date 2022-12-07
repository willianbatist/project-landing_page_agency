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
        <a className="mobA" href="#service">
          SERVICE
        </a>
        <a className="mobA" href="#work">
          WORK
        </a>
        <a className="mobA" href="#pricing">
          PRICING
        </a>
        <a className="mobA" href="#contact">
          CONTACT
        </a>
      </nav>
    </S.Container>
  );
}
