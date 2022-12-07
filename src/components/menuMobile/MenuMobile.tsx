import * as S from "./menuMobile.styles";

interface Props {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }: Props) {
  return (
    <S.Container isVisible={menuIsVisible}>
      <nav className="mobNav">
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#home"
        >
          HOME
        </a>
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#products"
        >
          PRODUCTS
        </a>
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#service"
        >
          SERVICE
        </a>
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#work"
        >
          WORK
        </a>
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#pricing"
        >
          PRICING
        </a>
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#contact"
        >
          CONTACT
        </a>
      </nav>
    </S.Container>
  );
}
