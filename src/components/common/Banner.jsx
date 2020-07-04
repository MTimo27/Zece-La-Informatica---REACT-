import React from 'react';
import './styles/Banner.css';

function Banner() {
  return (
    <React.Fragment>
      <section id="banner">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p class="promo-title animated fadeIn">ZECE LA INFORMATICA</p>
              <p class="promo-text animated fadeIn">
                Facem informatica sa para usoara.
              </p>
            </div>

            <div class="col-md-6 text-center">
              <img
                src="img/Banner Image Zece La Informatica.png"
                alt=""
                class="img-fluid animated fadeIn"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Banner;
