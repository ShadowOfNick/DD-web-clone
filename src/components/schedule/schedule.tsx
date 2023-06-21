import React from 'react';
import { ScheduleItem } from './schedule-item';
import { ScheduleProps } from '../../services';



export const Schedule: React.FC<ScheduleProps> = ({
  title,
  subtitle,
  scheduleItems,
}) => {
  return (
    <div className="schedule">
      <div className="schedule__titles">
        <h2 className="schedule__title">
          {title}
        </h2>
        <p className="schedule__subtitle">
         {subtitle}
        </p>
      </div>
      <div className="schedule__container">
        <ul className="schedule__list">
          {scheduleItems.map((scheduleItem, index) => (
            <ScheduleItem
              key={index}
              dateAndTime={scheduleItem.dateAndTime}
              label={scheduleItem.label}
              description={scheduleItem.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
