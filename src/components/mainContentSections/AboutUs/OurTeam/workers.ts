/* eslint-disable sonarjs/no-duplicate-string */
import shortid from 'shortid';

import { getSingleImage } from '../../../img';

const getWorkerPhoto = (name: string) => getSingleImage(`aboutUs/ourTeam/${name}`, 'jpg');

export interface Links {
  twitter: string;
  facebook: string;
  instagram: string;
}
export interface Worker {
  id: string;
  name: string;
  position: string;
  photo: string;
  links: Links;
}

const workers: Worker[] = [
  {
    id: shortid.generate(),
    name: 'Sana Nair',
    position: 'CEO',
    photo: getWorkerPhoto('sana-nair'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Kiran Kumar',
    position: 'Supporting staff',
    photo: getWorkerPhoto('kiran-kumar'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Shanker Dev',
    position: 'Developer',
    photo: getWorkerPhoto('shanker-dev'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Krishna Nunni',
    position: 'CEO',
    photo: getWorkerPhoto('krishna-nunni'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Sunantha',
    position: 'Supporting staff',
    photo: getWorkerPhoto('sunantha'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Jaanaki',
    position: 'Hoster',
    photo: getWorkerPhoto('jaanaki'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Aswathy Kripa',
    position: 'Hoster',
    photo: getWorkerPhoto('aswathy-kripa'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Mariya Devi',
    position: 'Supporting staff',
    photo: getWorkerPhoto('mariya-devi'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
];

export { workers };
