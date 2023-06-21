import Head from 'next/head';
import React from 'react';
import { Footer, Navbar } from '../../components';
import { FooterData, NavbarItemFields } from '../../services';

interface GlobalLayoutProps {
  pageTitle: string;
  homepage?: boolean;
  navbarItems: NavbarItemFields[];
  children: React.ReactNode;
  footer: FooterData;
};

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({
  pageTitle,
  homepage = false,
  navbarItems,
  footer,
  children,
}) => (
  <div className="global-layout">
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content="Deloitte Digital" />
      <link rel="icon" type="image/png" href="/img/favicon.png" />
    </Head>
    <Navbar navbarItems={navbarItems} />
    <div className="global-layout__content">
      {children}
    </div>
    <Footer
      homepage={homepage}
      slogan={footer.slogan}
      footerText={footer.footerText}
      iconListLinks={footer.iconList}
      navigationLinks={footer.links.map(item => ({
        title: item.title,
        url: item.link,
      }))}
    />
  </div>
);
