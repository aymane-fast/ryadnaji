import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#111', padding: '20px 0', textAlign: 'center', color: '#fff' }}>
            <div className="container">
                {/* <div className="footer-logo" style={{ marginBottom: '50px' }}>
                    <a href="#" style={{ color: '#fff', fontSize: '24px', textDecoration: 'none' }}>Ryad Naji</a>
                </div> */}
                <nav className="footer-nav" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a href="#home" style={{ color: '#bfbfbf', margin: '0 15px', textDecoration: 'none' }}>ACCUEIL</a>
<a href="#about" style={{ color: '#bfbfbf', margin: '0 15px', textDecoration: 'none' }}>À PROPOS</a>
<a href="#menu" style={{ color: '#bfbfbf', margin: '0 15px', textDecoration: 'none' }}>MENU</a>

                </nav>
                <div className="footer-social" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px 0' }}>
                    <a href="https://instagram.com/ryad_naji" style={{ margin: '0 10px' }}>
                        <img src="./assets/logos/instagram.png" alt="Instagram logo for Ryad Naji" style={{ width: '60px', height: '60px' }} />
                    </a>
                </div>
                <div className="footer-copyright" style={{ fontSize: '14px' }}>
                    <p>Droits d'auteur ©2024 Tous droits réservés | par Ryad Naji</p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
