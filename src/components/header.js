import React, { useEffect } from 'react';

const Header = () => {
    // Function to handle the closing of the menu
    const closeMenu = () => {
        const nav = document.querySelector('[data-navbar]');
        const overlay = document.querySelector('[data-overlay]');
        nav.classList.remove('active'); // or whatever class activates the menu
        overlay.classList.remove('active'); // close the overlay too
        document.body.style.overflow = 'auto'; // Allow scrolling again
    };

    useEffect(() => {
        // Add event listeners to each link in the navbar to close the menu after clicking
        const navbarLinks = document.querySelectorAll('.navbar-link');
        navbarLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Cleanup event listeners when the component is unmounted
        return () => {
            navbarLinks.forEach(link => {
                link.removeEventListener('click', closeMenu);
            });
        };
    }, []);

    return (
        <header className="header" data-header>
            <div className="container">

                <div className="logo">
                    <img  src="./assets/images/my-logo.png" width="80" height="50" alt="Ryad Naji Logo" className="header-logo"/>
                    
                </div>

                <nav className="navbar" data-navbar>

                    <button className="close-btn" aria-label="close menu" data-nav-toggler>
                        <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                    </button>

                    <div className="logo">
                        <img src="./assets/images/my-logo.png" width="160" height="50" alt="Ryad Naji Logo" />
                    </div>

                    <ul className="navbar-list">

                        <li className="navbar-item">
                            <a href="#home" className="navbar-link hover-underline active">
                                <div className="separator"></div>
                                <span className="span">ACCUEIL</span>
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#menu" className="navbar-link hover-underline">
                                <div className="separator"></div>
                                <span className="span">MENU</span>
                            </a>
                        </li>

                        <li className="navbar-item">
                            <a href="#about" className="navbar-link hover-underline">
                                <div className="separator"></div>
                                <span className="span">À PROPOS</span>
                            </a>
                        </li>
                    </ul>

                </nav>

                <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>

                <div className="overlay" data-nav-toggler data-overlay></div>

            </div>
        </header>
    );
}

export default Header;
