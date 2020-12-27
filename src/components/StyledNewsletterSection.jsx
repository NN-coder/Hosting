import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaRegEnvelope } from 'react-icons/fa';

import StyledWrapper from './StyledWrapper';
import StyledStandardSectionTitle from './StyledStandardSectionTitle';
import StandardBtn from './StandardBtn';

const NewsletterWrapper = styled(StyledWrapper)`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }
`;
const NewsletterForm = styled.form`
  width: 100%;
  margin-left: 30px;

  @media screen and (max-width: 950px) {
    display: contents;
  }
`;

const NewsletterFormInput = styled.input`
  width: calc(100% - 195px);
  height: 55px;
  padding: 0 25px;
  color: var(--text-color);
  font-size: 1.35rem;
  letter-spacing: 0.01em;
  border: none;

  @media screen and (max-width: 950px) {
    width: 80%;
  }
`;
const NewsletterFormSubmit = styled(StandardBtn)`
  width: 195px;
  font-weight: 700;
  font-size: 1.35rem;
`;

const image = (
  <IconContext.Provider value={{ size: '25px' }}>
    <FaRegEnvelope />
  </IconContext.Provider>
);

const NewsletterSection = ({ className }) => (
  <section className={className}>
    <NewsletterWrapper>
      <StyledStandardSectionTitle rowOne="Sign up your" rowTwo="Newsletter" beforeImg={image} />
      <NewsletterForm action="" method="post">
        <NewsletterFormInput type="text" placeholder="Enter your domain name" />
        <NewsletterFormSubmit type="submit">Sign up now</NewsletterFormSubmit>
      </NewsletterForm>
    </NewsletterWrapper>
  </section>
);

NewsletterSection.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledNewsletterSection = styled(NewsletterSection)`
  padding: 100px 0 85px;
  background-color: var(--blue);

  @media screen and (max-width: 1250px) {
    padding: 100px 20px 85px;
  }
`;

export default StyledNewsletterSection;
