import React from 'react';
import { RichTextContent } from '../rich-text-content';
import { ScheduleItemProps } from '../../services';

export const ScheduleItem: React.FC<ScheduleItemProps> = ({
  dateAndTime,
  label,
  description,
}) => (
  <li className="schedule-item">
    <h3 className="schedule-item__title">{label}</h3>
    {!!dateAndTime && <span className="schedule-item__date">{dateAndTime}</span>}
    {!!description && (
      <div className="schedule-item__content">
        <RichTextContent content={description} />
      </div>
    )}
    <div className="schedule-item__ellipse" />
  </li>
);
