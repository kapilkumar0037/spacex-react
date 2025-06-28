import logo from "../../assets/react.svg";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="flex justify-between p-4 shadow bg-white">
      <img src={logo}></img>
      <Nav />
    </header>
  );
};

export default Header;
