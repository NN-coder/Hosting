/* eslint-disable sonarjs/no-duplicate-string */
import shortid from 'shortid';

const images = require.context('./img');
const getImagePath = (name) => images(name).default;

const workers = [
  {
    id: shortid.generate(),
    name: 'Sana Nair',
    position: 'CEO',
    photo: getImagePath('./sana-nair.jpg'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Kiran Kumar',
    position: 'Supporting staff',
    photo: getImagePath('./kiran-kumar.jpg'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Shanker Dev',
    position: 'Developer',
    photo: getImagePath('./shanker-dev.jpg'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Krishna Nunni',
    position: 'CEO',
    photo: getImagePath('./krishna-nunni.jpg'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Sunantha',
    position: 'Supporting staff',
    photo: getImagePath('./sunantha.jpg'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Jaanaki',
    position: 'Hoster',
    photo: getImagePath('./jaanaki.jpg'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Aswathy Kripa',
    position: 'Hoster',
    photo: getImagePath('./aswathy-kripa.jpg'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Mariya Devi',
    position: 'Supporting staff',
    photo: getImagePath('./mariya-devi.jpg'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
];

export default workers;
