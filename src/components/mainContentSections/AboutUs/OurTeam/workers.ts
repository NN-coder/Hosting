/* eslint-disable sonarjs/no-duplicate-string */
import shortid from 'shortid';

import { getImages, ImgObj } from '../../../img';

const getWorkerPhotos = (name: string) =>
  getImages(`aboutUs/ourTeam/${name}`, ['jpg', 'webp'], 'object');

export interface Links {
  twitter: string;
  facebook: string;
  instagram: string;
}
export interface Worker {
  id: string;
  name: string;
  position: string;
  photos: ImgObj;
  links: Links;
}

const workers: Worker[] = [
  {
    id: shortid.generate(),
    name: 'Sana Nair',
    position: 'CEO',
    photos: getWorkerPhotos('sana-nair'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Kiran Kumar',
    position: 'Supporting staff',
    photos: getWorkerPhotos('kiran-kumar'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Shanker Dev',
    position: 'Developer',
    photos: getWorkerPhotos('shanker-dev'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Krishna Nunni',
    position: 'CEO',
    photos: getWorkerPhotos('krishna-nunni'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Sunantha',
    position: 'Supporting staff',
    photos: getWorkerPhotos('sunantha'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Jaanaki',
    position: 'Hoster',
    photos: getWorkerPhotos('jaanaki'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Aswathy Kripa',
    position: 'Hoster',
    photos: getWorkerPhotos('aswathy-kripa'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
  {
    id: shortid.generate(),
    name: 'Mariya Devi',
    position: 'Supporting staff',
    photos: getWorkerPhotos('mariya-devi'),
    links: { twitter: '#', facebook: '#', instagram: '#' },
  },
];

export { workers };
