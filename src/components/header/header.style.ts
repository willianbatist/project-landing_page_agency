import styled, { css } from "styled-components";

interface Props {
  isVisible: boolean;
}

export const HeaderMenu = styled.header<Props>`
  position: fixed;
  background: transparent;
  width: 100vw;
  border-bottom: 1px solid rgba(255,255,255,.2);
  z-index: 2;
  transition-duration: .3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.7,1,.7,1);

@media(max-width: 900px) {
  .nav-list {
    display: none !important;
  }

  nav {
    justify-content: space-between !important;
  }

  .logo {
    margin-left: 2% !important;
  }
}

.logo {
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: white;
}

span {
  color: aqua;
}

.nav-list {
  list-style: none;
  display: flex;
}

.nav-list li {
  letter-spacing: 3px;
  margin-left: 32px;
}

.a {
  font-family: Hind,sans-serif;
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: 0.3s;
  line-height: 55px;
  padding: 2%;
  text-transform: uppercase;
  text-shadow: 3px 3px 5px rgba(0,0,0,0.39);
}

.a:hover {
  color: aqua;
  text-shadow: none;
}

${({ isVisible }) => isVisible && css`
    background-color: white;
    .a {
      color: #515769;
      text-shadow: none;
    }
    .logo {
      color: #515769;
    }
  `}
`;



export const NavList = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif;
  height: 12vh;

  @media(max-width: 900px) {
    justify-content: space-between !important;
}
`;