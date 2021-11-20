import { Link } from "react-router-dom";
import logoImg from "../images/other/logo.png";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logoImg} alt="" />
      <span>
        Trillow<span>US</span>
      </span>
    </Link>
  );
}

export default Logo;
