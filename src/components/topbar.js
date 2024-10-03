import React from 'react';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">

        <address className="topbar-item">
          <div className="icon">
            <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
          </div>

          <span className="span">
            2 Rue Sebou, Kénitra Maroc
          </span>
        </address>

        <div className="separator"></div>

        <div className="topbar-item item-2">
          <div className="icon">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
          </div>

          <span className="span">Tous les jours : 11h00 à 23h00</span>
        </div>

        <a href="tel:+212537364575" className="topbar-item link">
          <div className="icon">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
          </div>

          <span className="span">0537364575</span>
        </a>

        <div className="separator"></div>

        <a href="tel:+21261480875" className="topbar-item link">
          <div className="icon">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
          </div>

          <span className="span">0661480875</span>
        </a>

      </div>
    </div>
  );
}

export default Topbar;
