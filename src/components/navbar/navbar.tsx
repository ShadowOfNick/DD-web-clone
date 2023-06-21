import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { setCookie } from '../../utils';
import { NavbarItemFields } from '../../services';
import DDLogo from './img/logo.svg';

const DEFAULT_LOCALE = 'cs-CZ';

interface NavbarProps {
  navbarItems: NavbarItemFields[];
};

export const Navbar: React.FC<NavbarProps> = ({
  navbarItems,
}) => {
  const router = useRouter();
  const {
    asPath,
    locale = DEFAULT_LOCALE,
  } = router;
  const [isOpenHamburger, setIsOpenHamburger] = React.useState(false);
  const registerNewLocale = (requestedLocale: string) => {
    setCookie('NEXT_LOCALE', requestedLocale, 1);
  };

  const onSwitchLanguage = (currentLanguage: string) => {
    const targetLocale = currentLanguage === 'cs-CZ' ? 'en-US' : 'cs-CZ';
    registerNewLocale(targetLocale);
    setIsOpenHamburger(!isOpenHamburger);
    router.push(asPath, asPath, { locale: targetLocale});
  };

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo-wrap">
          <Link href="/">
            <a className="navbar__logo-link">
              <Image
                src={DDLogo}
                alt="ddlogo"
                width="90"
                height="41"
                loading="lazy"
              />
            </a>
          </Link>
        </div>
        
        <div className="navbar__hamburger" onClick={() => setIsOpenHamburger(!isOpenHamburger)}>
          <span className={`navbar__hamburger__icon${isOpenHamburger ? ' navbar__hamburger__icon--close' : ''}`} />
        </div>
      </div>

      <ul className={`navbar__menu${isOpenHamburger ? ' navbar__menu--active' : ''}`}>
        {navbarItems.map((item, index) => (
          <li
            className="navbar__menu__item"
            key={index}
          >
            <Link href={item.link || `/#${item.id}`}>
              <a className="navbar__menu__item__link" onClick={() => setIsOpenHamburger(false)}>
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className={`navbar__lang-container${isOpenHamburger ? ' navbar__lang-container--active' : ''}`}>
        <button className="navbar__lang-container__link" onClick={() => onSwitchLanguage(locale)}>
          {locale === 'cs-CZ' ? 'EN' : 'CZ'}
        </button>
      </div>
    </nav>
  );
};
