import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="flex justify-between p-4 shadow bg-white">
      <Link to={"/"}>
        <img src={logo}></img>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
