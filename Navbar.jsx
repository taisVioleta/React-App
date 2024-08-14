import  { Link } from 'react-router-dom';
import AstroLogo from "/astronaut.svg"; 
import "./Navbar.css";


//desestructuración de elementos links 

function Navbar ({ links }) {
    console.log (links);

const navStyles = {
    backgroundColor :  "#24095a"
};
    return (
<nav className="nav-container" style={navStyles}>
    <img className="nav-logo" src={AstroLogo} alt="Space-App" />

    <div className="links-container">
      { 
      links.map ((item) => (
        
            <Link key ={item.id} to={item.href}>
                {item.text}
            </Link>
        ) )
      }  
    </div>
</nav>
    );
}

export default Navbar;