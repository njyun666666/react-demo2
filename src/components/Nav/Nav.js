import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">home</Link> |<Link to="/about">about</Link>
    </div>
  );
};

export default Nav;
