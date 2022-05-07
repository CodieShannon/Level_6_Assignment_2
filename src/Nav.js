//Import React Router Dom Link
import { Link } from 'react-router-dom';

//Import React useState
import {useState} from "react";

// Import StyleSheet
import './css/App.css';

function Nav() {
    //Create state for hamburger menu
    const [isHamburgerMenu, setHamburgerMenu] = useState(false);

    //Return navigation menu, hamburger menu overlay, and hamburger menu
    return (
        <div>
            <nav>
                <picture className="nav-logo">
                    <source srcSet="images/logo.webp" type="image/webp" />
                    <img src="images/logo.png" alt="SCP Foundation Logo" />
                </picture>

                <div className="nav-elms">
                    <button id="hamburger-btn" className={isHamburgerMenu ? "nav-btn hamburger-btn-toggle" : "nav-btn" } type="button" onClick={ () => setHamburgerMenu(!isHamburgerMenu)}>
                        <span className="fa fa-bars"></span><span className="hamburger-txt">&nbsp;&nbsp;Subjects Files</span>
                    </button>

                    <form className="search-bar" action="" method="POST" autoComplete="off">
                        <input className="autocomp" autoComplete="false" name="hidden" type="text" />

                        <input className="search search-tb" name="search" type="search" placeholder="Search Here..." maxLength="7" required />

                        <button className="nav-btn search search-btn">
                            <span className="fa fa-search"></span><span className="search-txt">&nbsp;&nbsp;Search</span>
                        </button>
                    </form>
                </div>
            </nav>

            <section className={isHamburgerMenu ? "hamburger overlay hamburger-overlay-toggle" : "hamburger-overlay"}> </section>

            <aside className={isHamburgerMenu ? "hamburger-wrapper hamburger-wrapper-toggle" : "hamburger-wrapper" }>
                <h3 className="hamburger-title">Subject Files</h3>
                <div className="hamburger-menu">
                    <ul className="links">
                        <Link to="/"> <li>SCP-006</li> </Link>
                        <Link to="/SCP-015"> <li>SCP-015</li> </Link>
                        <Link to="/SCP-021"> <li>SCP-21</li> </Link>
                        <Link to="/SCP-162"> <li>SCP-162</li> </Link>
                        <Link to="/SCP-188"> <li>SCP-188</li> </Link>
                        <Link to="/SCP-250"> <li>SCP-250</li> </Link>
                        <Link to="/SCP-309"> <li>SCP-309</li> </Link>
                        <Link to="/SCP-479"> <li>SCP-479</li> </Link>
                        <Link to="/SCP-529"> <li>SCP-529</li> </Link>
                        <Link to="/SCP-667"> <li>SCP-667</li> </Link>
                        <Link to="/SCP-679"> <li>SCP-679</li> </Link>
                        <Link to="/SCP-686"> <li>SCP-686</li> </Link>
                        <Link to="/SCP-740"> <li>SCP-740</li> </Link>
                        <Link to="/SCP-753"> <li>SCP-753</li> </Link>
                        <Link to="/SCP-779"> <li>SCP-779</li> </Link>
                        <Link to="/SCP-844"> <li>SCP-844</li> </Link>
                        <Link to="/SCP-863"> <li>SCP-863</li> </Link>
                        <Link to="/SCP-871"> <li>SCP-871</li> </Link>
                        <Link to="/SCP-902"> <li>SCP-902</li> </Link>
                        <Link to="/SCP-966"> <li>SCP-966</li> </Link>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Nav;