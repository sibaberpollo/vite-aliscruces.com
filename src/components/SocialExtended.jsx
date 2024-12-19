import React from "react";

const SocialExtended = () => {
  const socialLinks = [
    {
      href: "https://api.whatsapp.com/send?phone=584244370005",
      title: "WhatsApp",
      iconClass: "fab fa-whatsapp",
    },
    {
      href: "https://open.spotify.com/intl-es/artist/3D7CI88hHavfZKZgrVqz4Y?si=PueVlVUTT0KPcMdHjzymJg&utm_medium=share&utm_source=linktree&nd=1&dlsi=811d3935618d40c3",
      title: "Spotify",
      iconClass: "fab fa-spotify",
    },
    {
      href: "https://www.instagram.com/aliscruces/",
      title: "Instagram",
      iconClass: "fab fa-instagram",
    },
    {
      href: "https://www.tiktok.com/@aliscruces4",
      title: "TikTok",
      iconClass: "fab fa-tiktok",
    },
    {
      href: "https://www.patreon.com/AlisCruces",
      title: "Patreon",
      iconClass: "fab fa-patreon",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100091828728907",
      title: "Facebook",
      iconClass: "fab fa-facebook",
    },
    {
      href: "https://www.youtube.com/@aliscruces",
      title: "YouTube",
      iconClass: "fab fa-youtube",
    },
    {
      href: "https://music.apple.com/pa/artist/alis-cruces/1762746924",
      title: "Apple Music",
      iconClass: "fa-brands fa-apple",
    },
  ];

  return (
    <div className="listen-dv text-center">
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              title={link.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.iconClass}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialExtended;
