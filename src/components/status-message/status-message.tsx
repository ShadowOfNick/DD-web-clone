import React from 'react';
import Image from 'next/image';
import ErrorIcon from './img/error.svg';
import SuccessfulIcon from './img/success.svg';
import InfoIcon from './img/info.svg';

const SUCCESS = 'success';
const ERROR = 'error';
const INFO = 'info';

type MessageStatus = typeof SUCCESS | typeof ERROR | typeof INFO;

interface StatusMessageProps {
  status?: MessageStatus;
  title?: string;
  text: string;
};

const getStatusIcon = (statusMessage: MessageStatus) => {
  if (statusMessage === ERROR) return ErrorIcon;
  if (statusMessage === INFO) return InfoIcon;
  return SuccessfulIcon;
};

export const StatusMessage: React.FC<StatusMessageProps> = ({
  status = SUCCESS,
  title = undefined,
  text,
}) => (
  <div className="status-message">
    <div className="status-message__icon">
      <Image
        src={getStatusIcon(status)}
        alt={`${status} icon`}
      />
    </div>
    {title && (
      <p className="status-message__title">
        {title}
      </p>
    )}
    <p className="status-message__text">
      {text}
    </p>
  </div>
);
