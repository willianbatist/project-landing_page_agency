import styled from "styled-components";

export const HeaderMenu = styled.header`
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
  text-transform: uppercase;
  letter-spacing: 4px;
  color: white;
}

span {
  color: aqua;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif;
  background: #23232e;
  height: 12vh;
}

.nav-list {
  list-style: none;
  display: flex;
}

.nav-list li {
  letter-spacing: 3px;
  margin-left: 32px;
}

a {
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  opacity: 0.7;
}
`;