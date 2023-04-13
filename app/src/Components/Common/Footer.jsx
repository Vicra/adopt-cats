import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 bg-dark text-light">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Rescate Animal Honduras</h5>
          <p>Ayudanos compartiendo la página web o las redes sociales.</p>
          <img src="low_white.png" alt="" width={400} />
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Información</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/about">Acerca de Nosotros</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
            <li>
              <a href="https://paypal.me/VictorRamirezPerdomo?country.x=HN&locale.x=en_US">
                Donaciones
              </a>
            </li>
            <li>
              <a href="https://www.buymeacoffee.com/honvramirez">
                Buy me a Coffee
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Redes Sociales</h5>
          <ul className="list-unstyled">
            <li>
              <a href="https://www.instagram.com/rescate.animal.hn">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      <div>Copyright © {new Date().getFullYear()} Guacamayan Software</div>
      <a href="https://victorramirez.me/"> Victor Ramirez</a>
    </div>
  </footer>
);

export default Footer;
