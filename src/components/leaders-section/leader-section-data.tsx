import { LeaderCard } from '../../services';

export const leadersMockData: LeaderCard[] = [
  {
    name: 'Jane Doe',
    position: 'CEO',
    phone: '123-456-7890',
    image: '/image.jpg',
    email: 'something',
    emailRequest: {
      emailCc: '',
      emailTo: '',
      subject: '',
    },
  },
  {
    name: 'John Doe',
    position: 'CTO',
    phone: '123-456-7891',
    image: '/image2.jpg',
    email: 'something',
    emailRequest: {
      emailCc: '',
      emailTo: '',
      subject: '',
    },
  },
];
  