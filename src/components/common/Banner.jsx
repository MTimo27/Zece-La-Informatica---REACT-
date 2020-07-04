import React from 'react';
import './styles/Banner.css';

function Banner() {
  return (
    <React.Fragment>
      <section id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="promo-title animated fadeIn">ZECE LA INFORMATICA</p>
              <p className="promo-text animated fadeIn">
                Facem informatica sa para usoara.
              </p>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="img/Banner Image Zece La Informatica.png"
                alt=""
                className="img-fluid animated fadeIn"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Banner;
