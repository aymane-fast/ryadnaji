import React, { useState } from "react";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = (e) => {
    e.preventDefault();
    setIsPlaying(true);
  };

  return (
    <div>
      <div className="centered-container">
        <p className="section-subtitle label-2">Découvrez</p>

        <h2 className="headline-1 section-title">Notre Restaurant</h2>
      </div>

      <section className="video-section">
        <div className={`video-container ${isPlaying ? "active" : ""}`}>
          {!isPlaying && (
            <div className="video-thumbnail">
              <div className="play-button" onClick={handlePlayClick}>
                <img
                  src="./assets/images/play-icon.png"
                  alt="Play Icon"
                  className="play-icon"
                />
              </div>
              <img
                src="./assets/images/cover.jpg"
                alt="Video Thumbnail"
                className="thumbnail-img"
              />
            </div>
          )}
          {isPlaying && (
            <iframe
              src="https://player.vimeo.com/video/1008776109?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="video-iframe"
              title="Video"
            ></iframe>
          )}
          {!isPlaying && (
            <div className="video-text">
              <h2>Découvrez Notre Restaurant</h2>
              <p>
                Plongez dans l'univers de notre restaurant, où chaque plat
                raconte une histoire.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Video;
