import React from 'react';

const Hero = () => {
    return (
        <section className="hero text-center" aria-label="home" id="home">

            <ul className="hero-slider" data-hero-slider>
                <li className="slider-item active" data-hero-slider-item>
                    <div className="slider-bg">
                        <img src="./assets/images/couscous.webp" width="1880" height="950" alt="Cuisine Marocaine" className="img-cover" />
                    </div>

                    <p className="label-2 section-subtitle slider-reveal">Cuisine Marocaine Authentique</p>

                    <h1 className="display-1 hero-title slider-reveal">
                        Un Voyage Culinaire<br />
                        au Cœur du Maroc
                    </h1>

                    <p className="body-2 hero-text slider-reveal">
                        Découvrez les saveurs envoûtantes et authentiques de notre cuisine marocaine, préparées avec passion pour vous.
                    </p>

                    <a href="#menu" className="btn btn-primary slider-reveal">
                        <span className="text text-1">Voir Notre Menu</span>
                        <span className="text text-2" aria-hidden="true">Voir Notre Menu</span>
                    </a>
                </li>

                <li className="slider-item" data-hero-slider-item>
                    <div className="slider-bg">
                        <img src="./assets/images/myslider.webp" width="1880" height="950" alt="Saveurs Traditionnelles" className="img-cover" />
                    </div>

                    <p className="label-2 section-subtitle slider-reveal">Une Expérience Unique</p>

                    <h1 className="display-1 hero-title slider-reveal">
                        Des Saveurs <br />
                        Inspirées par les Traditions
                    </h1>

                    <p className="body-2 hero-text slider-reveal">
                        Partagez un moment convivial en famille et laissez-vous envoûter par nos plats riches en saveurs.
                    </p>

                    <a href="#menu" className="btn btn-primary slider-reveal">
                        <span className="text text-1">Voir Notre Menu</span>
                        <span className="text text-2" aria-hidden="true">Voir Notre Menu</span>
                    </a>
                </li>

                <li className="slider-item" data-hero-slider-item>
                    <div className="slider-bg">
                        <img src="./assets/images/bastila.webp" width="1880" height="950" alt="Ambiance Marocaine" className="img-cover" />
                    </div>

                    <p className="label-2 section-subtitle slider-reveal">Plats Authentiques & Délicieux</p>

                    <h1 className="display-1 hero-title slider-reveal">
                        Où Chaque Saveur <br />
                        Raconte une Histoire
                    </h1>

                    <p className="body-2 hero-text slider-reveal">
                        Venez avec vos proches et savourez nos plats qui racontent l'histoire culinaire du Maroc.
                    </p>

                    <a href="#menu" className="btn btn-primary slider-reveal">
                        <span className="text text-1">Voir Notre Menu</span>
                        <span className="text text-2" aria-hidden="true">Voir Notre Menu</span>
                    </a>
                </li>
            </ul>

            <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
                <ion-icon name="chevron-back"></ion-icon>
            </button>

            <button className="slider-btn next" aria-label="slide to next" data-next-btn>
                <ion-icon name="chevron-forward"></ion-icon>
            </button>

            {/* <a href="#" className="hero-btn has-after">
                <img src="./assets/images/hero-icon.png" width="48" height="48" alt="booking icon" />
                <span className="label-2 text-center span">Réserver une Table</span>
            </a> */}

        </section>
    );
}

export default Hero;
