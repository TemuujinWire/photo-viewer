import "./Header.css";
import logo from "../ben-abstract.png"

function Header() {
  return (
    <header>
      <div className="header-left">
        Ben Photo Viewer
      </div>
      <div className="header-right">
        <img src={logo}/>
      </div>
    </header>
  )
}

export default Header;