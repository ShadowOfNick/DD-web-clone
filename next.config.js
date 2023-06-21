/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['images.ctfassets.net', 'downloads.ctfassets.net'],
    formats: ['image/webp'],
  },
  serverRuntimeConfig: {
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID || '',
    contentfulAccessToken: process.env.CONTENTFUL_DELIVERY_API_KEY || '',
    smtpHost: process.env.SMTP_HOST,
    smtpPort: Number(process.env.SMTP_PORT || '587'),
    smtpSecure: ['true', '1', 'yes'].includes((process.env.SMTP_SECURE || '').toLowerCase()),
    smtpUser: process.env.SMTP_USER,
    smtpPassword: process.env.SMTP_PASSWORD,
    emailReplyTo: process.env.EMAIL_REPLY_TO,
    emailSender: process.env.EMAIL_SENDER || 'DD Web <noreply@deloitte-digital.cz>',
  },
};

module.exports = nextConfig;
