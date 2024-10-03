import React from "react";

const Events = () => {
  return (
    <div>
      <div className="centered-container">
        <p className="section-subtitle label-2">Événements</p>

        <h2 className="headline-1 section-title">Nos Événements Spéciaux</h2>
      </div>
      <section
        className="events-section text-center"
        aria-labelledby="events-label"
      >
        <div className="events-grid container">
          <div className="event-card">
            <div className="golden-bg">
              <img
                src="./assets/images/fete.jpg"
                alt="Fête"
                className="event-img"
              />
            </div>
            <h3 className="event-title">Fêtes</h3>
            <p className="event-text">
              Célébrez des moments inoubliables avec nous.
            </p>
          </div>

          <div className="event-card">
            <div className="golden-bg">
              <img
                src="./assets/images/event4.png"
                alt="Anniversaire"
                className="event-img"
              />
            </div>
            <h3 className="event-title">Anniversaires</h3>
            <p className="event-text">
              Rendez votre jour spécial encore plus spécial.
            </p>
          </div>

          <div className="event-card">
            <div className="golden-bg">
              <img
                src="./assets/images/soire.jpg"
                alt="Soirées"
                className="event-img"
              />
            </div>
            <h3 className="event-title">Soirées</h3>
            <p className="event-text">
              Profitez de nos événements nocturnes vibrants.
            </p>
          </div>

          {/* <div className="event-card">
                    <div className="golden-bg">
                        <img src="./assets/images/event2.png" alt="Événements" className="event-img" />
                    </div>
                    <h3 className="event-title">Événements</h3>
                    <p className="event-text">Organisez vos événements avec élégance et style.</p>
                </div> */}
        </div>
      </section>
    </div>
  );
};

export default Events;
