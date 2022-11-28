import { useState } from "react";
import "../styles/Header.css";
// import { MenuMobile } from "./menuMobile/MenuMobile";

export default function Header() {
  // const [menuIsVisible, setMenuIsVisible] = useState(true);

  return (
    <header className="header">
      {/* <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      /> */}
      <nav>
        <p className="logo">
          <span>mk</span>digital
        </p>
        <ul className="nav-list">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="a">PRODUCTS</a>
          </li>
          <li>
            <a href="a">SERVICE</a>
          </li>
          <li>
            <a href="a">WORK</a>
          </li>
          <li>
            <a href="a">PRICING</a>
          </li>
          <li>
            <a href="a">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
