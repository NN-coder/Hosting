import React from 'react';
import styled from 'styled-components/macro';
import { IconContext } from 'react-icons';
import { FaRegEnvelope } from 'react-icons/fa';

import { StyledWrapper } from './StyledWrapper';
import { StyledStandardSectionTitle } from './StyledStandardSectionTitle';
import { StandardBtn } from './StandardBtn';

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

export interface Props {
  className?: string;
}

const NewsletterSection: React.FC<Props> = ({ className }) => (
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

const StyledNewsletterSection = styled(NewsletterSection)`
  padding: 100px 0 85px;
  background-color: var(--blue);
`;

export { StyledNewsletterSection };
