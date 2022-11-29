import { useState } from "react";
import * as S from "./header.style";
import { MenuMobile } from "../menuMobile/MenuMobile";
import { RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <S.HeaderMenu>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <S.NavList>
        <p className="logo">
          <span>mk</span>digital
        </p>
        <ul className="nav-list">
          <li>
            <a className="a" href="/">
              HOME
            </a>
          </li>
          <li>
            <a className="a" href="a">
              PRODUCTS
            </a>
          </li>
          <li>
            <a className="a" href="a">
              SERVICE
            </a>
          </li>
          <li>
            <a className="a" href="a">
              WORK
            </a>
          </li>
          <li>
            <a className="a" href="a">
              PRICING
            </a>
          </li>
          <li>
            <a className="a" href="a">
              CONTACT
            </a>
          </li>
        </ul>
        <RiMenu3Fill
          onClick={() => setMenuIsVisible(true)}
          className="mobile"
        />
      </S.NavList>
    </S.HeaderMenu>
  );
}
