import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '../button';
import { FormContactData } from '../../services';

interface ContactFormProps {
  title: string;
  description: string;
  sendingInProgress: boolean;
  onSubmit: (data: FormContactData) => void;
};

export const ContactForm: React.FC<ContactFormProps> = ({
  title,
  description,
  sendingInProgress,
  onSubmit,
}) => {
  const { t } = useTranslation('common');
  const [formContactData, setFormContactData] = React.useState<FormContactData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleFormDataChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormContactData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    });
  };

  const handleSubmit= (event: React.ChangeEvent<HTMLFormElement>) =>{
    event.preventDefault();
    onSubmit(formContactData);
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">
        <span>
          {title}
        </span>
      </h2>

      <p className="contact-form__description">
        {description}
      </p>

      <form className="contact-form__form-wrapper" onSubmit={handleSubmit}>
        <div className="contact-form__name-wrapper">
          <label className="contact-form__label" htmlFor="name">
            {t('common.form.name')}
          </label>

          <input
            className="contact-form__input"
            type="text"
            id="name"
            name="name"
            required
            minLength={3}
            onChange={handleFormDataChange}
          />
        </div>

        <div className="contact-form__company-wrapper">
          <label className="contact-form__label" htmlFor="company">
            {t('common.form.company')}
          </label>

          <input
            className="contact-form__input"
            type="text"
            id="company"
            name="company"
            required
            minLength={2}
            onChange={handleFormDataChange}
          />
        </div>

        <div className="contact-form__email-wrapper">
          <label className="contact-form__label" htmlFor="email">
            {t('common.form.email')}
          </label>

          <input
            className="contact-form__input"
            type="email"
            id="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={handleFormDataChange}
          />
        </div>

        <div className="contact-form__phone-wrapper">
          <label className="contact-form__label" htmlFor="phone">
            {t('common.form.phone')}
          </label>

          <input
            className="contact-form__input"
            type="tel"
            id="phone"
            name="phone"
            minLength={9}
            onChange={handleFormDataChange}
          />
        </div>

        <div className="contact-form__message-wrapper">
          <label className="contact-form__label" htmlFor="Message">
            {t('common.form.message')}
          </label>

          <textarea
            id="message"
            name="message"
            className="contact-form__textarea"
            required
            onChange={handleFormDataChange}
          />
        </div>
        <div className="contact-form__button-wrapper">
          <Button
            text={t('common.form.button')}
            type="submit"
            disabled={sendingInProgress}
            arrow
          />
        </div>
      </form>
    </div>
  );
};
