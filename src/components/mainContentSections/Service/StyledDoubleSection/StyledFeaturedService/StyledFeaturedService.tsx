/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import styled from 'styled-components';

import { StyledStandardSectionTitle } from '../../../../StyledStandardSectionTitle';
import { StyledServiceCard } from './StyledServiceCard';
import { getImages } from '../../../../utils/img';

const getServiceImg = (num: number) => {
  return getImages(`service/featuredService/service_${num}`, ['jpg', 'webp'], 'object');
};

export interface Props {
  className?: string;
}

const FeaturedService: React.FC<Props> = ({ className }) => (
  <section className={className}>
    <StyledStandardSectionTitle rowOne="Featured" rowTwo="Service" />
    <StyledServiceCard images={getServiceImg(1)} serviceName="Service name one">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make.
    </StyledServiceCard>
    <StyledServiceCard images={getServiceImg(2)} serviceName="Service name two">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make.
    </StyledServiceCard>
    <StyledServiceCard images={getServiceImg(3)} serviceName="Service name three">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make.
    </StyledServiceCard>
  </section>
);

const StyledFeaturedService = styled(FeaturedService)`
  padding-right: 40px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 0;
    text-align: center;
  }
`;

export { StyledFeaturedService };
