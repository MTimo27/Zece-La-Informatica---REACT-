import React from 'react';
import './styles/AboutUs.css';

function AboutUs() {
  return (
    <React.Fragment>
      <section id="about-us">
        <div class="container">
          <h1 class="title text-center">Despre noi</h1>

          <div class="row">
            <div class="col-md-6 about-us">
              <p class="about-title">Atuuriile noastre</p>
              <ul>
                <li>
                  Credem în fapte nu în vorbe, în comunitate, dar mai ales în
                  oameni.
                </li>
                <li>
                  Suntem implicați deoarece schimbarea pornește din fiecare
                  dintre noi.
                </li>
                <li>
                  Fiecare zi ne împinge să fim mai buni, mai inovativi și mai
                  creativi.
                </li>
                <li>Iubim informatica si facem totul cu drag.</li>
                <li>
                  Avem cunostiinte vaste privind informatica la nivel de liceu
                  si nu numai.
                </li>
              </ul>
            </div>

            <div class="col-md-6">
              <img
                src="img/Despre noi Zece La Informatica.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AboutUs;
