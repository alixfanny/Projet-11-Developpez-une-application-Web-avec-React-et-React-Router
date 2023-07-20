import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img>logo kasa-</img>
            <nav>
                <ul>
                    <li><Link to="/Home">Accueil</Link></li>
                    <li><Link to="/Apropos">À propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}
  
  export default Header;
  