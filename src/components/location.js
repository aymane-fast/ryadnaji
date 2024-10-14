import React from 'react';

const Location = () => {
    return (
        <section className="location-section text-center" aria-labelledby="location-label">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-5hKz4Q5JHJYzBoOMgyk6Z8K0EOujPlpmdmZHcA8tYTC5Jx7pVh4L9HfbXFE5ZBeWr3Sg3DdH1Js73JoBpqbT2g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div className="location-container container">
                <div className="location-info bg-black-10">
                <div className="centered-container">
        <p className="section-subtitle label-2">Localisation</p>

        <h2 className="headline-1 section-title">Découvrez Nos Emplacements</h2>
      </div>
                    {/* <h2 className="headline-1 section-title">Découvrez Nos Emplacements</h2>
                    <p className="section-text">
                        Plongez-vous dans l'authenticité marocaine en visitant nos lieux traditionnels, où la qualité et le savoir-faire sont au cœur de chaque expérience.
                    </p> */}
                </div>
                <div className="location-map">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d853.9338574975257!2d-6.580595613629822!3d34.26044576908594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda759e1ec638957%3A0xa55346a58b1fcfc5!2sRyad%20Naji!5e1!3m2!1sen!2sma!4v1725876633723!5m2!1sen!2sma" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d853.9338574975257!2d-6.580595613629822!3d34.26044576908594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda759e1ec638957%3A0xa55346a58b1fcfc5!2sRyad%20Naji!5e1!3m2!1sen!2sma!4v1725876633723!5m2!1sen!2sma"
                        width="900" height="450" loading="lazy"
                        style={{ border: '5px solid hsl(38, 61%, 73%)', borderRadius: '10px' }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title='Google Maps Location'
                    ></iframe>
                </div>

            </div>
        </section>
    );
}

export default Location;
