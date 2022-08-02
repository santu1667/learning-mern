import '../css/Navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom"

function Navbar(props) {
var homeURL = props.url;
var isAdmin = props.isAdmin;

  return (
      <nav>
        <ul className="nav-list">
            <Link to={homeURL}  className="nav-item">Shop24x7</Link>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/Department"  className="nav-item">Departments</Link>
            <Link to="/Offers"  className="nav-item">Offers</Link>
            <Link to="/Profile"  className="nav-item">Profile</Link>
            {isAdmin &&
            <Link to="/AddProduct" className="nav-item">AddProduct</Link>}
            <Link to="/Cart" className="nav-item"><ShoppingCartIcon/></Link>
            <Link to="/Logout" className="nav-item">Logout</Link>
        </ul>
    </nav>
  );
}

export default Navbar;
