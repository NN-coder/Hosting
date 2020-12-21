/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledStandardSectionTitle from '../../../../StyledStandardSectionTitle';
import StyledServiceCard from './StyledServiceCard';

const images = require.context('./img');
const getImagePath = (name) => images(name).default;

const FeaturedService = ({ className }) => (
  <section className={className}>
    <StyledStandardSectionTitle rowOne="Featured" rowTwo="Service" />
    <StyledServiceCard
      images={{
        image: getImagePath('./service_1.jpg'),
        imageWebp: getImagePath('./service_1.webp'),
      }}
      serviceName="Service name one"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make.
    </StyledServiceCard>
    <StyledServiceCard
      images={{
        image: getImagePath('./service_2.jpg'),
        imageWebp: getImagePath('./service_2.webp'),
      }}
      serviceName="Service name two"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make.
    </StyledServiceCard>
    <StyledServiceCard
      images={{
        image: getImagePath('./service_3.jpg'),
        imageWebp: getImagePath('./service_3.webp'),
      }}
      serviceName="Service name three"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make.
    </StyledServiceCard>
  </section>
);

FeaturedService.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledFeaturedService = styled(FeaturedService)`
  padding-right: 40px;
`;

export default StyledFeaturedService;
