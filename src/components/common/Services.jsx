import React from 'react';
import './styles/Services.css';

function Services() {
  return (
    <React.Fragment>
      <section id="services">
        <div className="container text-center">
          <h1 className="title">Ce contin modulele?</h1>
          <div className="row text-center">
            <div className="col-md-4 services">
              <a>
                <img src="img/Modulul 1 Zece La Informatica.png" alt="" />
                <h4 className="subtitleBig">MODULUL 1</h4>
                <h4 className="subtitleSmall">LECTII VIDEO</h4>
              </a>
              <div className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action disabled"
                >
                  Lectii video cu toate capitolele din materia IX-XI
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action disabled"
                >
                  Toata materia pentru bac explicata si recapitulata
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action disabled"
                >
                  Subiecte de BAC rezolvate
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action disabled"
                >
                  Exercitii pentru testarea cunostiintelor
                </a>
              </div>
            </div>

            <div className="col-md-4 services">
              <a>
                <img src="img/Modulul 2 Zece La Informatica.png" alt="" />
                <h4 className="subtitleBig">MODULUL 2</h4>
                <h4 className="subtitleSmall">SOLUTII LA PROBLEME</h4>
              </a>
              <div className="list-group">
                <a className="list-group-item list-group-item-action disabled">
                  Peste 1500 de probleme de pe pbinfo rezolvate
                </a>
              </div>
            </div>

            <div className="col-md-4 services">
              <a>
                <img src="img/Modulul 3 Zece La Informatica.png" alt="" />
                <h4 className="subtitleBig">MODULUL 3</h4>
                <h4 className="subtitleSmall">PREGATIRE PENTRU OLIMPIADA</h4>
              </a>
              <div className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action disabled"
                >
                  Lectii video cu materia pentru olimpiada
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action disabled"
                >
                  Probleme de olimpiada explicate
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action disabled"
                >
                  Subiecte de olimpiada
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action disabled"
                >
                  Subiecte admitere UBB si UT explicate si rezolvate
                </a>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary animated pulse infinite slow"
          >
            Urmaste-ne pe youtube!
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Services;
