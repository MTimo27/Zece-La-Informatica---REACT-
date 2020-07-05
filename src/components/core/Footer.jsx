import React from 'react';
import './styles/Footer.css';
import './styles/animate.css';
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaHeart,
} from 'react-icons/fa';

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
                  <FaFacebookSquare className="icons" />
                  Pagina noastra de Facebook
                </p>
              </a>
              <a target="blank" href="#">
                <p>
                  <FaInstagram className="icons" />
                  Pagina noastra de Instagram
                </p>
              </a>
              <a target="blank" href="#">
                <p>
                  <FaYoutube className="icons" />
                  Canalul nostru de Youtube
                </p>
              </a>
              <p>
                <FaEnvelope className="icons" />
                zecelainformatica@gmail.com
              </p>
            </div>

            <div className="col-md-4 footer-box">
              <p>
                <b>CREDITS</b>
              </p>
              <p>
                Here you can find the best icons:{' '}
                <a target="blank" href="https://icons8.com/">
                  ICONS8
                </a>
              </p>
              <p>
                Individual ICONS8 icon links:{' '}
                <a
                  target="blank"
                  href="https://icons8.com/icon/EVnYSXoaRlSq/cinema"
                >
                  Cinema,{' '}
                </a>
                <a
                  target="blank"
                  href="https://icons8.com/icon/uJOoDz71OZQk/learning"
                >
                  Learning,{' '}
                </a>
                <a
                  target="blank"
                  href="https://icons8.com/icon/k5yrvE-6Igws/module"
                >
                  Module,{' '}
                </a>
                <a
                  target="blank"
                  href="https://icons8.com/icon/zoV7N3K3Bkz1/program"
                >
                  Program{' '}
                </a>
              </p>
              <p>
                Illustrations by:{' '}
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
            Website, and logo made with <FaHeart /> by{' '}
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
