import React from 'react';

const SpecialDish = () => {
    return (
        <section className="special-dish text-center" aria-labelledby="dish-label">

            <div className="special-dish-banner">
                <img src="./assets/images/rfisa.jpg" width="940" height="900" loading="lazy" alt="Rfisa Marocaine, a traditional Moroccan dish with chicken and lentils" className="img-cover" />
            </div>

            <div className="special-dish-content bg-black-10">
                <div className="container">

                    <img src="./assets/images/badge-1.png" width="28" height="41" loading="lazy" alt="Special dish badge" className="abs-img" />

                    <p className="section-subtitle label-2">Plat Spécial</p>

                    <h2 className="headline-1 section-title">Rfisa Marocaine</h2>

                    <p className="section-text">
                        Découvrez la Rfisa, un plat emblématique du Maroc, riche en saveurs et en histoire. Préparée avec du poulet, des lentilles, et des crêpes trid, cette recette traditionnelle est un véritable festin pour les sens.
                    </p>

                    <div className="wrapper">
                        <del className="del body-3">120.00 MAD</del>

                        <span className="span body-1">70.00 MAD</span>
                    </div>

                    <a href="#menu" className="btn btn-primary">
                        <span className="text text-1">Voir Tout Le Menu</span>

                        <span className="text text-2" aria-hidden="true">Voir Tout Le Menu</span>
                    </a>

                </div>
            </div>

            {/* <img src="./assets/images/shape-4.png" width="179" height="359" loading="lazy" alt="Decorative shape" className="shape shape-1" /> */}

            {/* <img src="./assets/images/banner-2.png" width="351" height="462" loading="lazy" alt="Decorative banner" className="shape shape-2" /> */}

        </section>
    );
}

export default SpecialDish;
