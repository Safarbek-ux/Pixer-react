import logo from "../../assets/images/logo.png";
import Button from "../Button/Button";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <a href="index.html">
            <img src={logo} alt="Pixer-logo" />
          </a>
          <nav className="nav">
            <ul className="nav_list">
              <li className="nav_list-item">
                <a href="#">Bosh sahifa</a>
              </li>
              <li className="nav_list-item">
                <a href="#">Xizmatlar</a>
              </li>
              <li className="nav_list-item">
                <a href="#">Portfolio</a>
              </li>
              <li className="nav_list-item">
                <a href="#">Jamoa</a>
              </li>
              <li className="nav_list-item">
                <a href="#">Blog</a>
              </li>
              <li className="nav_list-item">
                <a href="#">Kontaktlar</a>
              </li>
            </ul>
            <Button text="+998 90 921 37 11" />
          </nav>
          <div className="btn-menu">
            <span className="span"></span>
            <span className="spanbefore"></span>
            <span className="spanafter"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
