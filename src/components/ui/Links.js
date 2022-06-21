import React from 'react';

export const LinkFooter = ({name, link}) => (<a className="text-white" href={link}>{name}</a>);

export const LinkFooterSocial = ({icon, link, last}) => (<a className={`btn btn-light btn-social ${last ? '' : 'mr-2'}`} href={link}><i className={icon} role="button" aria-label="Mute volume"></i></a>);

export const NavLink = ({link, name}) => (<a href={`/#${link}`} className={`nav-item nav-link ${window.location.hash.replace('#', '') === link ? 'active' : ''}`}>{name}</a>);