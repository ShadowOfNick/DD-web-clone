import React from 'react';
import Image from 'next/image';
import { EmailRequest } from './email-request';
import { CardLeaderProps } from '../../services';

export const CardLeader: React.FC<CardLeaderProps> = ({
  name,
  position,
  image,
  phone,
  email,
  emailRequest,
}) => (
  <div className="card-leader" data-testid={`leader-card-${name ? name : 'main'}`}>
    <div className="card-leader__image">
      <Image
        src={image}
        alt="leader-image"
        layout="fill"
        loading="lazy"
        objectFit="cover"
      />
    </div>

    <div className="card-leader__wrapper">
      <h2 className="card-leader__name">
        {name}
      </h2>

      <p className="card-leader__position">
        {position}
      </p>

      {email && (
        emailRequest? (
          <EmailRequest
            subject={emailRequest.subject}
            emailTo={emailRequest.emailTo}
            emailCc={emailRequest.emailCc}
          >
            {email}
          </EmailRequest>
        ) : (
          <p className="card-leader__contact">
            {email}
          </p>
        )
      )}

      {phone && (
        <p className="card-leader__contact">
          {phone}
        </p>
      )}
    </div>
  </div>
);
