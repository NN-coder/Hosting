/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import shortid from 'shortid';
import { FaRegEnvelope, FaLock, FaLaptop, FaCog, FaRegComments } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';

const standardText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus odio sequi dicta harum iure ab.';

const benefitCards = [
  {
    img: <BiDollar />,
    title: 'Low-cost service',
    text: standardText,
    id: shortid.generate(),
  },
  {
    img: <FaRegComments />,
    title: '24/7/365 Support',
    text: standardText,
    id: shortid.generate(),
  },
  {
    img: <FaLaptop />,
    title: 'Protect your pc',
    text: standardText,
    id: shortid.generate(),
  },
  {
    img: <FaCog />,
    title: 'DNS control',
    text: standardText,
    id: shortid.generate(),
  },
  {
    img: <FaRegEnvelope />,
    title: 'Domain transfer',
    text: standardText,
    id: shortid.generate(),
  },
  {
    img: <FaLock />,
    title: '100% security',
    text: standardText,
    id: shortid.generate(),
  },
];

export default benefitCards;
