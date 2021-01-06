import shortid from 'shortid';

export interface Domain {
  name: string;
  price: number | string;
  id: string;
}

const domains: Domain[] = [
  { name: 'nyc', price: 5, id: shortid.generate() },
  { name: 'wiki', price: 5, id: shortid.generate() },
  { name: 'uk', price: 3, id: shortid.generate() },
  { name: 'eng', price: 7, id: shortid.generate() },
  { name: 'ml', price: 5, id: shortid.generate() },
  { name: 'km', price: 8, id: shortid.generate() },
  { name: 'com', price: 5, id: shortid.generate() },
  { name: 'in', price: 1, id: shortid.generate() },
  { name: 'org', price: 2, id: shortid.generate() },
  { name: 'net', price: 2, id: shortid.generate() },
  { name: 'biz', price: 4, id: shortid.generate() },
  { name: 'ap', price: 9, id: shortid.generate() },
  { name: 'ru', price: 2, id: shortid.generate() },
  { name: 'info', price: 3, id: shortid.generate() },
  { name: 'ua', price: 7, id: shortid.generate() },
  { name: 'pro', price: 5, id: shortid.generate() },
  { name: 'xyz', price: 1, id: shortid.generate() },
  { name: 'dev', price: 6, id: shortid.generate() },
  { name: 'dev', price: 6, id: shortid.generate() },
  { name: 'xyz', price: 1, id: shortid.generate() },
  { name: 'pro', price: 5, id: shortid.generate() },
  { name: 'ua', price: 7, id: shortid.generate() },
  { name: 'info', price: 3, id: shortid.generate() },
  { name: 'ru', price: 2, id: shortid.generate() },
  { name: 'ap', price: 9, id: shortid.generate() },
  { name: 'biz', price: 4, id: shortid.generate() },
  { name: 'net', price: 2, id: shortid.generate() },
  { name: 'org', price: 2, id: shortid.generate() },
  { name: 'in', price: 1, id: shortid.generate() },
  { name: 'com', price: 5, id: shortid.generate() },
  { name: 'km', price: 8, id: shortid.generate() },
  { name: 'ml', price: 5, id: shortid.generate() },
  { name: 'eng', price: 7, id: shortid.generate() },
  { name: 'uk', price: 3, id: shortid.generate() },
  { name: 'wiki', price: 5, id: shortid.generate() },
  { name: 'nyc', price: 5, id: shortid.generate() },
];

export { domains };
