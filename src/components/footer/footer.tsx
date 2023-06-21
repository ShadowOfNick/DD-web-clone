import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import FacebookIcon from './img/ico-facebook.svg';
import TwitterIcon from './img/ico-twiter.svg';
import InstagramIcon from './img/ico-instagram.svg';
import LinkedInIcon from './img/ico-linkedin.svg';
import EmailIcon from './img/ico-email.svg';

const ICONS = [FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, EmailIcon];

interface NavigationLinksProps {
  title: string;
  url: string;
};

interface FooterProps {
  homepage?: boolean;
  slogan: string;
  footerText: string;
  navigationLinks: NavigationLinksProps[];
  iconListLinks: string[];
};

export const Footer: React.FC<FooterProps> = ({
  homepage = false,
  slogan,
  footerText,
  iconListLinks,
  navigationLinks,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`footer${homepage ? ' footer--homepage' : ''}`}>
      {!homepage && (
        <div className="footer__page-bottom-image" />
      )}

      <div className="footer__main-content">
        <div className="footer__main-content__wrapper">
          <p className="footer__main-content__slogan">
            {slogan}
          </p>
          <div className="footer__main-content__icons">
            {iconListLinks && iconListLinks.map((item, index) => (
              <Link href={item} key={index}>
                <a className="footer__main-content__icons__icon" rel="noopener noreferrer">
                  <Image
                    src={ICONS[index]}
                    alt="facebook"
                    width="36"
                    height="36" 
                    loading="lazy"
                  />
                </a>
              </Link>
            ))}
          </div>

          <div className="footer__main-content__links">
            {navigationLinks && navigationLinks.map((item, index) => (
              <Link href={item.url} key={index}>
                <a className="footer__main-content__links__link">
                  {item.title}
                </a>
              </Link>
            ))}
          </div>

          <p className="footer__main-content__text">
            {footerText}
          </p>

          <p className="footer__main-content__copyright">
            Copyright © {currentYear}. Deloitte. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
