import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
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
