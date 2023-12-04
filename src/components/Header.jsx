//
import { Link } from "react-router-dom";

const Header = () => {
  return <header className="bg-amber-200">
    <h5>Header</h5>

    <nav>
      <ul className="flex gap-1 text-green-500">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="protect">Protect</Link>
        </li>
      </ul>
    </nav>
  </header>;
};

export default Header;
