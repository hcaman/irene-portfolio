import React from 'react';
import { Link } from 'gatsby';
import { useFooterData } from '../hooks/useFooterData';
import { LinkFooterSocial } from './ui/Links';
// import { Separator } from './ui/Separators';
// import { LinkFooter } from './ui/Links';

const Footer = ({ siteTitle }) => {
  const isBrowser = typeof window !== 'undefined';
  const domainName = isBrowser && window.location.hostname.replace('www.', '');
  const { allDatoCmsFooterSocialLink } = useFooterData();
  const socialLinksElements = allDatoCmsFooterSocialLink.nodes.map(
    (item, i) => {
      const { icon, link, id } = item;
      const socialLink = link?.value?.document?.children[0]?.children[0]?.url;
      const isLast = i === allDatoCmsFooterSocialLink.nodes.length - 1;
      return (
        <LinkFooterSocial
          key={id || i}
          icon={icon}
          link={socialLink}
          last={isLast}
        />
      );
    }
  );

  return (
    <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
      <div className="container text-center py-5">
        <div className="d-flex justify-content-center mb-4">
          {socialLinksElements}
        </div>
        {/* <div className="d-flex justify-content-center mb-3">
                <LinkFooter name={'Privacy'} link={'/#'} />
                <Separator />
            </div> */}
        <p className="m-0">
          &copy;{' '}
          <Link className="text-white font-weight-bold" to="/">
            {domainName}
          </Link>
          . All Rights Reserved. Designed by
          <a
            className="text-white font-weight-bold"
            href="https://htmlcodex.com"
          >
            {' '}
            HTML Codex
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
