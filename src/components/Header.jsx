import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <h1 id="header_text">
        <Link to={"/articles/"} id="link_from_header">
          NC NEWS
        </Link>
      </h1>
    </header>
  );
};

export default Header;
