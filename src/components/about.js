import React from 'react';

const About = () => {
    return (
        <section className="section about text-center" aria-labelledby="about-label" id="about">
            <div className="container">

                <div className="about-content">

                    <p className="label-2 section-subtitle" id="about-label">Notre Histoire</p>

                    <h2 className="headline-1 section-title">Chaque Plat Raconte une Histoire</h2>

                    <p className="section-text">
                        Ryad Naji préserve l'art culinaire marocain en respectant les traditions et en utilisant les meilleurs ingrédients. Nos chefs, experts en cuisine, préparent chaque plat avec soin, des épices sélectionnées aux méthodes de cuisson traditionnelles. Chaque bouchée, du couscous aux tajines, est un hommage à la riche culture marocaine. Venez vivre l'essence de notre cuisine dans une ambiance authentique.
                    </p>

                    <div className="contact-label">Réservation par Téléphone</div>

                    <a href="tel:+212537123456" className="body-1 contact-number hover-underline">0537364575</a>

                </div>

                <figure className="about-banner">

                    <img src="./assets/images/about-localisation.jpg" width="570" height="570" loading="lazy"
                        className="w-100" data-parallax-item data-parallax-speed="1"
                        alt="Carte illustrant l'emplacement de Ryad Naji à Kénitra" />

                    <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
                        <img src="./assets/images/about-second.jpg" width="285" height="285" loading="lazy"
                            className="w-100" 
                            alt="Photographie d'un plat typique de Ryad Naji" />
                    </div>

                </figure>

                <img src="./assets/images/shape-3.png" width="197" height="194" loading="lazy" className="shape" 
                    alt="Décoration graphique pour accentuer la mise en page" />

            </div>
        </section>
    );
}

export default About;
