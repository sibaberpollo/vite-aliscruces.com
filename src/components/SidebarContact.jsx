import React from 'react';
import SocialLinks from './SocialLinks';

export default function SidebarContact() {
  return (
    <div className="col-lg-4">
      <div className="get-touch">
        <h3 className="sb-title">Contáctame</h3>
        <p>
          Estoy disponible para colaboraciones, clases y cualquier consulta que tengas. ¡No dudes en escribirme!
        </p>
        <ul className="contact-dtts">
          <li>
            <i className="flaticon-telephone"></i>
            <span>+58 424 437 0005</span>
          </li>
          <li>
            <i className="flaticon-mail"></i>
            <span>
              <a href="mailto:tutorialesaliscruces@gmail.com">tutorialesaliscruces@gmail.com</a>
            </span>
          </li>
          <li>
            <i className="flaticon-location"></i>
            <span>Valencia, Venezuela</span>
          </li>
        </ul>
        <SocialLinks className="socio-links" />
      </div>
    </div>
  );
}
