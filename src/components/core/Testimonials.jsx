import React from 'react';
import './styles/Testimonials.css';

function Testimonials() {
  return (
    <React.Fragment>
      <section id="testimonials">
        <div className="container">
          <h1 className="title text-center">Referințe</h1>

          <div className="row offset-1">
            <div className="col-md-6 testimonials">
              <p>
                Zece La Informatica m-a ajutat sa invatat informatica si sa iau
                examenul de Bacalaureat cu brio. Recomand cu incredere!
              </p>

              <img src="img/User Zece La Informatica.png" alt="" />

              <p className="user-details">
                <b>Nume Prenume</b>
                <br />
                Profesie
              </p>
            </div>

            <div className="col-md-6 testimonials">
              <p>
                Zece La Informatica m-a ajutat sa invatat informatica si sa iau
                examenul de Bacalaureat cu brio. Recomand cu incredere!
              </p>

              <img src="img/User Zece La Informatica.png" alt="" />

              <p className="user-details">
                <b>Nume Prenume</b>
                <br />
                Profesie
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Testimonials;
