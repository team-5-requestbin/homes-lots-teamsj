import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <Link to="/homes">Homes</Link>
        </li>
        <li>
          <a href="./lots.html">Lots</a>
        </li>
      </ul>
    </div>
  );
};
