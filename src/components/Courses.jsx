import React from 'react';

export default function Courses({ imgSrc, name, role, profileLink, playlistLink }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="author-col">
        <img src={imgSrc} alt={name} />
        <h3>
          <a href={profileLink}>
            {name}
          </a>
        </h3>
        <span>{role}</span>
        <a href={playlistLink} className="playlist-icon patreon-icon">
          <i className="fab fa-patreon"></i>
        </a>
      </div>
    </div>
  );
}
