import React from 'react';
import { GlobalLayout } from '../global-layout';
import {
  LeadersSection,
  InfoSection,
  FocusSection,
  CareerSection,
  ProjectSection,
  Carousel,
  ContactForm,
  StatusMessage,
  BackgroundSwinger,
} from '../../components';
import { Color, SwingHandler } from '../../utils';
import { HomePageBaseProps, HomePageLayoutProps } from '../../services';


export const HomePageLayout: React.FC<HomePageBaseProps> = ({
  navbar,
  homePage,
  projectDetailPage,
  footer,
  // contactFormServerData,
  // sendingInProgress,
  // submitContactForm,
}) => {
  const leadersSectionRef = React.useRef<HTMLDivElement>(null);
  const contactFormRef = React.useRef<HTMLDivElement>(null);

  const swingHandler: SwingHandler = React.useCallback((initialColor: Color) => {
    const y = Math.round(1 + window.scrollY / 4);
    const fullBodyHeight = Math.round(document.body.clientHeight / 4);
    const leadersSectionHeight = leadersSectionRef.current?.clientHeight;
    const contactFormHeight = contactFormRef.current?.clientHeight;
    const offset = 20;

    if (leadersSectionHeight && contactFormHeight) {
      if (y > offset && y <= 650) {
        return {
          red: Math.round(initialColor.red + y - offset),
          green: Math.round(initialColor.green + y - offset),
          blue: Math.round(initialColor.blue + y - offset),
        };
      } else if (y < offset) {
        return initialColor;
      } else if (y > (fullBodyHeight - (leadersSectionHeight / 4) - (contactFormHeight / 4) - 300) && y <= (fullBodyHeight - (contactFormHeight / 4) - 280)) {
        const reset = y - (fullBodyHeight - (leadersSectionHeight / 4) - (contactFormHeight / 4) - 300);
        return {
          red: (reset*3) <= 95 ? Math.round(255 - (reset*3)) : 160,
          green: reset <= 35 ? Math.round(255 - reset) : 220,
          blue: 255,
        };
      } else if (y > (fullBodyHeight - (contactFormHeight / 4) - 280)) {
        const reset = y - (fullBodyHeight - (contactFormHeight / 4) - 280);
        return {
          red: reset <= 3 ? Math.round(160 - reset) : 157,
          green: reset <= 8 ? Math.round(220 - reset) : 212,
          blue: reset <= 48 ? Math.round(255 - reset) : 207,
        };
      }
    }

    return undefined;
  }, []);

  return (
    <BackgroundSwinger
      className="home-page-layout"
      initialColor={{
        red: 157,
        green: 212,
        blue: 207,
      }}
      swingHandler={swingHandler}
    >
      <GlobalLayout
        pageTitle='Deloitte Digital'
        homepage
        navbarItems={navbar}
        footer={footer}
      >
        <div className="home-page-layout__carousel-section">
          <Carousel items={homePage.carouselSlides.map((item) => ({
            title: item.title,
            imageUrl: item.imageUrl,
            description: item.description,
            link: item.link,
          }))} />
        </div>

        <div className="home-page-layout__info-section">
          <InfoSection
            title={homePage.infoSection.title}
            description={homePage.infoSection.description}
            quote={homePage.infoSection.quote}
          />
        </div>

        <div id={navbar[0].id || undefined} className="home-page-layout__career-section">
          <CareerSection
            title={homePage.careerSection.title}
            subtitle={homePage.careerSection.subtitle}
            positions={homePage.careerSection.positions}
            description={homePage.careerSection.description}
            careerImage={homePage.careerSection.careerImage}
            buttonLink={homePage.careerSection.buttonLink}
            buttonTitle={homePage.careerSection.buttonTitle}
          />
        </div>

        <div id={navbar[1].id || undefined} className="home-page-layout__card-section">
          <FocusSection
            title={homePage.focusSection.title}
            description={homePage.focusSection.description}
            focusCards={homePage.focusSection.focusCards}
          />
        </div>

        <div id={navbar[2].id || undefined} className="home-page-layout__project-section">
          <ProjectSection
            title={homePage.projectSection.title}
            description={homePage.projectSection.description}
            projectDetailData={projectDetailPage}
          />
        </div>

        <div ref={leadersSectionRef} className="home-page-layout__leaders-section">
          <LeadersSection
            title={homePage.peopleSection.title}
            description={homePage.peopleSection.description}
            leadersData={homePage.peopleSection.leadersData.map((item) => ({
              name: item.name,
              position: item.position,
              phone: item.phone,
              image: item.image,
              email: item.email,
              emailRequest: item.emailRequest,
            }))}
          />
        </div>

        <div id={navbar[3].id || undefined} ref={contactFormRef} className="home-page-layout__contact-form">
          {/* {contactFormServerData ? (
            <StatusMessage
              status={contactFormServerData.success ? 'success' : 'error'}
              title={contactFormServerData.messageTitle}
              text={contactFormServerData.messageText}
            />
          ) : (
            <ContactForm
              title={homePage.contactSectionTitle}
              description={homePage.contactSectionDescription}
              sendingInProgress={sendingInProgress}
              onSubmit={submitContactForm}
            />
          )} */}
        </div>
      </GlobalLayout>
    </BackgroundSwinger>
  );
};
