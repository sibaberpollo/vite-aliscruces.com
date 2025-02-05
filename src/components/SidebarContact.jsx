import React from 'react';
import { useTranslation } from 'react-i18next';
import SocialLinks from './SocialLinks';

export default function SidebarContact() {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <div className="col-lg-4">
      <div className="get-touch">
        <h3 className="sb-title">{t("contact.sidebar_title")}</h3>
        <p>{t("contact.sidebar_description")}</p>
        <ul className="contact-dtts">
          <li>
            <i className="flaticon-telephone"></i>
            <span>{t("contact.phone")}</span>
          </li>
          <li>
            <i className="flaticon-mail"></i>
            <span>
              <a href="mailto:tutorialesaliscruces@gmail.com">{t("contact.email")}</a>
            </span>
          </li>
          <li>
            <i className="flaticon-location"></i>
            <span>{t("contact.location")}</span>
          </li>
        </ul>
        <SocialLinks className="socio-links" />
      </div>
    </div>
  );
}
