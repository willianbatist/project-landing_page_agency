import { Container } from "./menuMobile.styles";
import { IoClose } from "react-icons/io5";

interface Props {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: Props) {
  return (
    <Container isVisible={menuIsVisible}>
      <IoClose className="mobIoClose" size={45} onClick={() => setMenuIsVisible(false)} />
      <nav className="mobNav">
        <a className="mobA" href="/">HOME</a>
        <a className="mobA" href="a">PRODUCTS</a>
        <a className="mobA" href="a">SERVICE</a>
        <a className="mobA" href="a">WORK</a>
        <a className="mobA" href="a">PRICING</a>
        <a className="mobA" href="a">CONTACT</a>
      </nav>
    </Container>
  );
}
