import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">MyMarket</div>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#platforms">Platforms</a>
            </li>

            <li>
              <a href="#accounts">Accounts</a>
            </li>
          </ul>
        </nav>

        <div className="header-button">
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
