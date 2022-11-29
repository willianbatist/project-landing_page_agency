import { Container } from "./menuMobile.styles";
import { IoClose } from "react-icons/io5";

interface Props {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: Props) {
  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <a href="/">HOME</a>
        <a href="a">PRODUCTS</a>
        <a href="a">SERVICE</a>
        <a href="a">WORK</a>
        <a href="a">PRICING</a>
        <a href="a">CONTACT</a>
      </nav>
    </Container>
  );
}
