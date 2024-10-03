import React from 'react';

const Service = () => {
    return (
        <section className="section service bg-black-10 text-center" aria-label="service">
            <div className="container">
                
                <p className="section-subtitle label-2">Saveurs Pour Les Royautés</p>

                <h2 className="headline-1 section-title">Nous Offrons Ce Qu'il y a de Mieux</h2>

                <p className="section-text">
                    Plongez dans l'authenticité de la cuisine marocaine, où chaque plat est méticuleusement préparé pour vous offrir une expérience culinaire digne des rois.
                </p>

                <ul className="grid-list">

                    <li>
                        <div className="service-card">

                            <div className="has-before hover:shine">
                                <figure className="card-banner img-holder" style={{ width: "285px", height: "336px", margin: "0 auto"}}>
                                    <img src="./assets/images/sefa.jpg" width="285" height="336" loading="lazy" alt="Assortment of Moroccan salads" className="img-cover" />
                                </figure>
                            </div>

                            <div className="card-content">

                                <h3 className="title-4 card-title">
                                    <div>Sefa</div>
                                </h3>

                                <div className="btn-text hover-underline label-2">Voir Le Menu</div>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="service-card">

                            <div className="has-before hover:shine">
                                <figure className="card-banner img-holder" style={{ width: "285px", height: "336px", margin: "0 auto"}}>
                                    <img src="./assets/images/tajines.jpg" width="285" height="336" loading="lazy" alt="Variety of Moroccan tajines" className="img-cover" />
                                </figure>
                            </div>

                            <div className="card-content">

                                <h3 className="title-4 card-title">
                                    <div>Tajines</div>
                                </h3>

                                <a href="#menu" className="btn-text hover-underline label-2">Voir Le Menu</a>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="service-card">

                            <div className="has-before hover:shine">
                                <figure className="card-banner img-holder" style={{ width: "285px", height: "336px", margin: "0 auto" }}>
                                    <img src="./assets/images/couscous2.jpg" width="285" height="336" loading="lazy" alt="Selection of Moroccan desserts" className="img-cover" />
                                </figure>
                            </div>

                            <div className="card-content">

                                <h3 className="title-4 card-title">
                                    <div>Couscous</div>
                                </h3>

                                <a href="#menu" className="btn-text hover-underline label-2">Voir Le Menu</a>

                            </div>

                        </div>
                    </li>

                </ul>

                <img src="./assets/images/shape-1.png" width="246" height="412" loading="lazy" alt="Decorative shape" className="shape shape-1 move-anim" />
                <img src="./assets/images/shape-2.png" width="343" height="345" loading="lazy" alt="Decorative shape" className="shape shape-2 move-anim" />

            </div>
        </section>
    );
}

export default Service;