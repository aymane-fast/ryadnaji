import React from "react";

const Menu = () => {
  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">
        Sélection Spéciale
        </p>

        <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

        <ul className="grid-list">
          <li>
            <div
              className="menu-card hover:card"
              style={{ marginBottom: "20px" }}
            >
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/menu-Harira Marocaine.jpg"
                  loading="lazy"
                  alt="Moroccan Harira Soup"
                  className="img-cover"
                  style={{ width: "150px", height: "150px" }}
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <p className="card-title">Harira Marocaine</p>
                  </h3>

                  <span className="span title-2">25 DH</span>
                </div>

                <p className="card-text label-1">
                  Savourez un véritable voyage gustatif avec notre Harira, une
                  soupe traditionnelle marocaine remplie d'épices exquises et de
                  saveurs authentiques.
                </p>
              </div>
            </div>
            <div
              className="menu-card hover:card"
              style={{ marginBottom: "20px" }}
            >
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/menu-salade de fruits.jpg"
                  loading="lazy"
                  alt="Fruit Salad"
                  className="img-cover"
                  style={{ width: "150px", height: "150px" }}
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <p className="card-title">Salade de Fruits</p>
                  </h3>

                  <span className="span title-2">35 DH</span>
                </div>

                <p className="card-text label-1">
                  Des mélanges colorés et vitaminés qui éveilleront vos
                  papilles. Faites le plein de saveurs saines et
                  rafraîchissantes
                </p>
              </div>
            </div>

            <div
              className="menu-card hover:card"
              style={{ marginBottom: "20px" }}
            >
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/salad r.jpg"
                  loading="lazy"
                  alt="Royal Salad"
                  className="img-cover"
                  style={{ width: "150px", height: "150px" }}
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <p className="card-title">Salade Chef</p>
                  </h3>

                  <span className="span title-2">30 DH</span>
                </div>

                <p className="card-text label-1">
                  Dégustez les saveurs exquises du Salad Chef au restaurant
                  Ryad Naji
                </p>
              </div>
            </div>

            <div
              className="menu-card hover:card"
              style={{ marginBottom: "20px" }}
            >
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/menu-Crème Caramel.jpg"
                  loading="lazy"
                  alt="Caramel Cream"
                  className="img-cover"
                  style={{ width: "150px", height: "150px" }}
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <p className="card-title">Crème Caramel</p>
                  </h3>

                  <span className="span title-2">20 DH</span>
                </div>

                <p className="card-text label-1">
                  Découvrez l'irrésistible délice du Crème Caramel chez Ryad
                  Naji Restaurant
                </p>
              </div>
            </div>

            <div
              className="menu-card hover:card"
              style={{ marginBottom: "20px" }}
            >
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/menu-Tajine aux Pruneaux.jpg"
                  loading="lazy"
                  alt="Tajine with Prunes"
                  className="img-cover"
                  style={{ width: "150px", height: "150px" }}
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <p className="card-title">Tajine aux Pruneaux</p>
                  </h3>

                  <span className="span title-2">70 DH</span>
                </div>

                <p className="card-text label-1">
                  Dégustez la viande tendre mijotée à la perfection, sublimée
                  par la douceur des pruneaux moelleux.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div
              className="menu-card hover:card"
              style={{ marginBottom: "20px" }}
            >
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/menu-tajine.jpg"
                  loading="lazy"
                  alt="Vegetable Tajine"
                  className="img-cover"
                  style={{ width: "150px", height: "150px" }}
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <p className="card-title">Tajine aux Légumes</p>
                  </h3>

                  <span className="span title-2">65 DH</span>
                </div>

                <p className="card-text label-1">
                  Une explosion de goûts frais et délicieux dans chaque bouchée.
                </p>
              </div>
            </div>

            <div
              className="menu-card hover:card"
              style={{ marginBottom: "20px" }}
            >
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/tanjia.jpg"
                  loading="lazy"
                  alt="Chef Salad"
                  className="img-cover"
                  style={{ width: "150px", height: "150px" }}
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <p className="card-title">Tanjia </p>
                  </h3>

                  <span className="span title-2">105 DH</span>
                </div>

                <p className="card-text label-1">
                  Dégustez les saveurs exquises du Tanjia au restaurant Ryad
                  Naji
                </p>
              </div>
            </div>
            <div
              className="menu-card hover:card"
              style={{ marginBottom: "20px" }}
            >
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/menu-couscous.jpg"
                  loading="lazy"
                  alt="Couscous with tfaya"
                  className="img-cover"
                  style={{ width: "150px", height: "150px" }}
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <p className="card-title">Couscous avec tfaya</p>
                  </h3>

                  <span className="span title-2">65 DH</span>
                </div>

                <p className="card-text label-1">
                  Venez Déguster notre Délicieux Couscous avec tfaya.
                </p>
              </div>
            </div>

            <div
              className="menu-card hover:card"
              style={{ marginBottom: "20px" }}
            >
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/menu-authentique Rfissa.jpg"
                  loading="lazy"
                  alt="Authentic Rfissa"
                  className="img-cover"
                  style={{ width: "150px", height: "150px" }}
                />
              </figure>
              
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <p className="card-title">Authentique Rfissa</p>
                  </h3>

                  <span className="span title-2">70 DH</span>
                </div>

                <p className="card-text label-1">
                  Savourez l'authentique Rfissa, une explosion de saveurs
                  marocaines dans chaque bouchée !
                </p>
              </div>
            </div>

            <div
              className="menu-card hover:card"
              style={{ marginBottom: "20px" }}
            >
              <figure className="card-banner img-holder">
                <img
                  src="./assets/images/menu-Tajine Mrouzia.jpg"
                  loading="lazy"
                  alt="Tajine Mrouzia"
                  className="img-cover"
                  style={{ width: "150px", height: "150px" }}
                />
              </figure>

              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <p className="card-title">Tajine Mrouzia</p>
                  </h3>

                  <span className="span title-2">70 DH</span>
                </div>

                <p className="card-text label-1">
                  Tajine parfumé au mélange sucré-salé est un incontournable
                  pour tous les amateurs de cuisine
                </p>
              </div>
            </div>
          </li>
        </ul>

        <p className="menu-text text-center">
  Nous sommes ouverts de <span className="span">11h00</span> à{" "}
  <span className="span">23h00</span>
</p>

<a href="#menu" className="btn btn-primary">
  <span className="text text-1">Voir tout le menu</span>

  <span className="text text-2" aria-hidden="true">
    Voir tout le menu
  </span>
</a>

        <img
          src="./assets/images/shape-5.png"
          width="921"
          height="1036"
          loading="lazy"
          alt="Decorative Shape"
          className="shape shape-2 move-anim"
        />
        <img
          src="./assets/images/shape-6.png"
          width="343"
          height="345"
          loading="lazy"
          alt="Decorative Shape"
          className="shape shape-3 move-anim"
        />
      </div>
    </section>
  );
};

export default Menu;
