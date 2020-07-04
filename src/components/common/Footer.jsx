import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <React.Fragment>
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-box">
              <img src="img/Logo Zece La Informatica.png" alt="" />
              <p>Facem informatica sa para usoara.</p>
            </div>

            <div className="col-md-4 footer-box">
              <p>
                <b>CONTACT</b>
              </p>
              <a target="blank" href="#">
                <p>
                  <i className="fab fa-facebook-square icons"></i>Pagina noastra
                  de Facebook
                </p>
              </a>
              <a target="blank" href="#">
                <p>
                  <i className="fab fa-youtube icons"></i>Canalul nostru de
                  Youtube
                </p>
              </a>
              <p>
                <i className="fa fa-envelope icons"></i>greenrooftop@gmail.com
              </p>
            </div>

            <div className="col-md-4 footer-box">
              <p>
                Here you can find the best icons:
                <a target="blank" href="https://icons8.com/">
                  ICONS8
                </a>
              </p>
              <p>
                Illustrations by:
                <a target="blank" href="https://dribbble.com/urancd">
                  Uran
                </a>
                <br />
                (*sorry for stealing your work)
              </p>
            </div>
          </div>

          <hr />
          <p className="copyright">
            &copy;Copyright all rights reserved to Zece La Informatica <br />
            Website, and logo made with
            <i className="fas fa-heart"></i> by
            <a target="blank" href="https://github.com/MTimo27">
              Mihai Timoficiuc
            </a>
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Footer;
