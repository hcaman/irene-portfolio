import React from 'react';
import { Link } from 'gatsby';

export const LinkFooter = ({ name, link }) => (
  <Link className="text-white" to={link}>
    {name}
  </Link>
);

export const LinkFooterSocial = ({ icon, link, last }) => (
  <a className={`btn btn-light btn-social ${last ? '' : 'mr-2'}`} href={link}>
    <i className={icon} role="button" aria-label="Mute volume"></i>
  </a>
);

export const NavLink = ({ link, name }) => {
  const isBrowser = typeof window !== 'undefined';
  const hashUrl = isBrowser && window.location.hash.replace('#', '');
  return (
    <Link
      to={`/#${link}`}
      className={`nav-item nav-link ${hashUrl === link ? 'active' : ''}`}
    >
      {name}
    </Link>
  );
};
