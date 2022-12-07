/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import * as S from "./header.style";
import MenuMobile from "../menuMobile/MenuMobile";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [headerIsVisible, setHeaderIsVisible] = useState(false);
  

  useEffect(() => {
    function positionScroll() {
      if (window.scrollY > 10) {
        setHeaderIsVisible(true);
      } else {
        setHeaderIsVisible(false);
      }
    }
    window.addEventListener("scroll", positionScroll);
  }, []);

  return (
    <S.HeaderMenu isVisible={headerIsVisible} menuVisible={menuIsVisible}>
      <S.NavList>
        <p className="logo">
          <span>mk</span>digital
        </p>
        <ul className="nav-list">
          <li>
            <a className="a" href="#home">
              HOME
            </a>
          </li>
          <li>
            <a className="a" href="#products">
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
        <div className="divIcons">
          <IoClose
          size={30}
          className="mobIoClose"
          onClick={() => setMenuIsVisible(false)}
        />
        <RiMenu3Fill
          onClick={() => setMenuIsVisible(true)}
          className="mobile"
        />
      </div>
      </S.NavList>
      <MenuMobile
        menuIsVisible={menuIsVisible}
      />
    </S.HeaderMenu>
  );
}
