import React from 'react';
import {
  BackgroundSwinger,
  CardLeader,
  HeroBanner,
  RichTextContent,
} from '../../components';
import { ConsultationPageProps } from '../../services';
import { GlobalLayout } from '../global-layout';

export const ConsultationLayout: React.FC<ConsultationPageProps> = ({
  consultationPage,
  navbar,
  footer,
}) => (
  <BackgroundSwinger
    className="consultation-layout"
    initialColor={{
      red: 157,
      green: 212,
      blue: 207,
    }}
  >
    <GlobalLayout
      pageTitle='Consultationt Page'
      navbarItems={navbar}
      footer={footer}
    >
      <HeroBanner
        title={consultationPage.title}
        subtitle={consultationPage.description}
        image={consultationPage.mainImage}
      />
      <div className='consultation-layout__text-content__top'>
        <RichTextContent
          content={consultationPage.contentTop}
        />
      </div>
      <div className='consultation-layout__consultants-section'>
          {consultationPage.peopleCard.map((people, index) => (
            <div
              key={index}
              className='consultation-layout__consultants-section__consultant'
            >
              <CardLeader
                name={people.title}
                position={people.subtitle}
                image={people.image}
                email={people.email}
                phone={people.phone}
                emailRequest={{
                  emailTo: people.emailRequest.emailTo,
                  emailCc: people.emailRequest.emailCc,
                  subject: people.subtitle,
                }}
              />
              <p className='consultation-layout__consultants-section__consultant__text'>{people.description}</p>
            </div>
          ))}
      </div>

      {consultationPage.contentBottom && 
        <div className='consultation-layout__text-content__bottom'>
          <RichTextContent
            content={consultationPage.contentBottom}
          />
        </div>
      }
    </GlobalLayout>
  </BackgroundSwinger>
);
