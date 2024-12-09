import React from 'react';

export default function SocialLinks({ className = "social-links" }) {
  const links = [
    {
      name: "Whatsapp",
      url: "https://api.whatsapp.com/send?phone=584244370005",
      iconClass: "fab fa-whatsapp",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aliscruces/",
      iconClass: "fab fa-instagram",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@aliscruces",
      iconClass: "fab fa-youtube",
    },
    {
      name: "Patreon",
      url: "https://www.patreon.com/AlisCruces",
      iconClass: "fab fa-patreon",
    },
  ];

  return (
    <ul className={className}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} title={link.name} className={link.name.toLowerCase()}>
            <i className={link.iconClass}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}
