// Import React Router Dom Link
import { Link } from 'react-router-dom';

// Import React useState
import {useEffect, useState} from "react";

// Import StyleSheet
import './css/App.css';

// Functions
function Nav() {
    // Create State for Hamburger Menu
    const [isHamburgerMenu, setHamburgerMenu] = useState(false);

    // Create State for Hamburger Menu Links
    const [LinkState, setLinkState] = useState(0);

    // Disable Hamburger Menu Once Link is Clicked
    useEffect(() => { setHamburgerMenu(false); }, [LinkState] );

    // Return Navigation Menu and Hamburger Menu
    return (
        <div>
            <nav>
                {/* Company Logo */}
                <picture className="nav-logo">
                    <source srcSet="images/logo.webp" type="image/webp" />
                    <img src="images/logo.png" alt="SCP Foundation Logo" />
                </picture>

                {/* Buttons */}
                <div className="nav-elms">
                    {/* Hamburger Menu - Button */}
                    <button id="hamburger-btn" className={isHamburgerMenu ? "nav-btn hamburger-btn-toggle" : "nav-btn" } type="button" onClick={ () => setHamburgerMenu(!isHamburgerMenu)}>
                        <span className="fa fa-bars"></span><span className="hamburger-txt">&nbsp;&nbsp;Subjects Files</span>
                    </button>

                    {/* Search Bar */}
                    <form className="search-bar" action="" method="POST" autoComplete="off">
                        <input className="autocomp" autoComplete="false" name="hidden" type="text" />

                        {/* Search Bar - Input Box */}
                        <input className="search search-tb" name="search" type="search" placeholder="Search Here..." maxLength="7" required />

                        {/* Search Bar - Button */}
                        <Link className="nav-btn search search-btn" to="/SCP-015" onClick={() => setLinkState(1)}>
                            <span className="fa fa-search"></span><span className="search-txt">&nbsp;&nbsp;Search</span>
                        </Link>
                    </form>
                </div>
            </nav>

            {/* Hamburger Menu - Overlay */}
            <section className={isHamburgerMenu ? "hamburger-overlay hamburger-overlay-toggle" : "hamburger-overlay" }> </section>

            {/* Hamburger Menu */}
            <aside className={isHamburgerMenu ? "hamburger-wrapper hamburger-wrapper-toggle" : "hamburger-wrapper" }>
                {/* Subject Files Header */}
                <h3 className="hamburger-title">Subject Files</h3>
                <div className="hamburger-menu">
                    {/* Subject Files Links */}
                    <ul className="links">
                        <Link to="/" onClick={() => setLinkState(0)}>
                            <li className={LinkState === 0 ? "link-active" : "link"}>SCP-006</li>
                        </Link>
                        
                        <Link to="/SCP-015" onClick={() => setLinkState(1)}>
                            <li className={LinkState === 1 ? "link-active" : "link"}>SCP-015</li>
                        </Link>

                        <Link to="/SCP-021" onClick={() => setLinkState(2)}>
                            <li className={LinkState === 2 ? "link-active" : "link"}>SCP-021</li>
                        </Link>

                        <Link to="/SCP-162" onClick={() => setLinkState(3)}>
                            <li className={LinkState === 3 ? "link-active" : "link"}>SCP-162</li>
                        </Link>

                        <Link to="/SCP-188" onClick={() => setLinkState(4)}>
                            <li className={LinkState === 4 ? "link-active" : "link"}>SCP-188</li>
                        </Link>

                        <Link to="/SCP-250" onClick={() => setLinkState(5)}>
                            <li className={LinkState === 5 ? "link-active" : "link"}>SCP-250</li>
                        </Link>

                        <Link to="/SCP-309" onClick={() => setLinkState(6)}>
                            <li className={LinkState === 6 ? "link-active" : "link"}>SCP-309</li>
                        </Link>

                        <Link to="/SCP-479" onClick={() => setLinkState(7)}>
                            <li className={LinkState === 7 ? "link-active" : "link"}>SCP-479</li>
                        </Link>

                        <Link to="/SCP-529" onClick={() => setLinkState(8)}>
                            <li className={LinkState === 8 ? "link-active" : "link"}>SCP-529</li>
                        </Link>

                        <Link to="/SCP-667" onClick={() => setLinkState(9)}>
                            <li className={LinkState === 9 ? "link-active" : "link"}>SCP-667</li>
                        </Link>

                        <Link to="/SCP-679" onClick={() => setLinkState(10)}>
                            <li className={LinkState === 10 ? "link-active" : "link"}>SCP-679</li>
                        </Link>

                        <Link to="/SCP-686" onClick={() => setLinkState(11)}>
                            <li className={LinkState === 11 ? "link-active" : "link"}>SCP-686</li>
                        </Link>

                        <Link to="/SCP-740" onClick={() => setLinkState(12)}>
                            <li className={LinkState === 12 ? "link-active" : "link"}>SCP-740</li>
                        </Link>

                        <Link to="/SCP-753" onClick={() => setLinkState(13)}>
                            <li className={LinkState === 13 ? "link-active" : "link"}>SCP-753</li>
                        </Link>

                        <Link to="/SCP-779" onClick={() => setLinkState(14)}>
                            <li className={LinkState === 14 ? "link-active" : "link"}>SCP-779</li>
                        </Link>

                        <Link to="/SCP-844" onClick={() => setLinkState(15)}>
                            <li className={LinkState === 15 ? "link-active" : "link"}>SCP-844</li>
                        </Link>

                        <Link to="/SCP-863" onClick={() => setLinkState(16)}>
                            <li className={LinkState === 16 ? "link-active" : "link"}>SCP-863</li>
                        </Link>

                        <Link to="/SCP-871" onClick={() => setLinkState(17)}>
                            <li className={LinkState === 17 ? "link-active" : "link"}>SCP-871</li>
                        </Link>

                        <Link to="/SCP-902" onClick={() => setLinkState(18)}>
                            <li className={LinkState === 18 ? "link-active" : "link"}>SCP-902</li>
                        </Link>

                        <Link to="/SCP-966" onClick={() => setLinkState(19)}>
                            <li className={LinkState === 19 ? "link-active" : "link"}>SCP-966</li>
                        </Link>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Nav;