import {
  Link,
} from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar-container">
    <h1>Math Magicians</h1>
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
