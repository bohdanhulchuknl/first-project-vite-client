//global
import { Link } from "react-router-dom";
//local
import AuthUser from "./ui/AuthUser";

const Header = () => {
  return <header className="flex items-center justify-between p-2 bg-amber-200 min-h-[60px]">
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

    <AuthUser/>

  </header>;
};

export default Header;
