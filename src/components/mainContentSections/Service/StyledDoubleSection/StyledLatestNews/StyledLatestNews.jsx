/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledStandardSectionTitle from '../../../../StyledStandardSectionTitle';
import StyledNewsCard from './StyledNewsCard';

const LatestNews = ({ className }) => (
  <section className={className}>
    <StyledStandardSectionTitle rowOne="Latest" rowTwo="News" />
    <StyledNewsCard newsNumber={1} newsHeading="News heading one">
      Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry&apos;s standard dummy text ever since the 1500s.
    </StyledNewsCard>
    <StyledNewsCard newsNumber={2} newsHeading="News heading two">
      Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry&apos;s standard dummy text ever since the 1500s.
    </StyledNewsCard>
    <StyledNewsCard newsNumber={3} newsHeading="News heading three">
      Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry&apos;s standard dummy text ever since the 1500s.
    </StyledNewsCard>
  </section>
);

LatestNews.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledLatestNews = styled(LatestNews)`
  padding-left: 30px;
`;

export default StyledLatestNews;
