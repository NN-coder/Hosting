/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import styled from 'styled-components';

import { StyledStandardSectionTitle } from '../../../../StyledStandardSectionTitle';
import { StyledServiceCard } from './StyledServiceCard';

const images = require.context('./img');
const getImagePath = (name: string): string => images(name).default;

export interface Props {
  className?: string;
}

const FeaturedService: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <StyledStandardSectionTitle rowOne="Featured" rowTwo="Service" />
    <StyledServiceCard
      image={getImagePath('./service_1.jpg')}
      imageWebp={getImagePath('./service_1.webp')}
      serviceName="Service name one"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make.
    </StyledServiceCard>
    <StyledServiceCard
      image={getImagePath('./service_2.jpg')}
      imageWebp={getImagePath('./service_2.webp')}
      serviceName="Service name two"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make.
    </StyledServiceCard>
    <StyledServiceCard
      image={getImagePath('./service_3.jpg')}
      imageWebp={getImagePath('./service_3.webp')}
      serviceName="Service name three"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make.
    </StyledServiceCard>
  </section>
);

const StyledFeaturedService = styled(FeaturedService)`
  padding-right: 40px;
`;

export { StyledFeaturedService };
