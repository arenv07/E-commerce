import '../css/navbar.css';
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <header className="navbar">
            <div className="nav-top">
                <h1>TF</h1>
                <ul>
                    <li><Link to="/" className="home-link">HOME</Link></li>
                    <li><Link to="/women" className="home-link">WOMEN'S</Link></li>
                    <li><Link to="/men" className="home-link">MEN'S</Link></li>
                    <li><Link to="/jewelry" className="home-link">JEWELRY</Link></li>
                    <li><Link to="/tech" className="home-link">TECH</Link></li>
                </ul>
            </div>
            <div className="nav-bottom">
                <div className="heading">TRENDY FINDZ</div>
                <div className="nav-bottom-right">
                    <div className="search-bar">
                        <input type="text" placeholder="Search.." className="search"></input>
                        <button className="search-button"></button>
                    </div>
                    <div className="cart">
                        <p>CART ()</p>
                    </div>
                </div>
            </div>
        </header>
    );
};