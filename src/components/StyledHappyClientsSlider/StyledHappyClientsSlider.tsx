/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { StyledWrapper } from '../StyledWrapper';
import { StyledStandardSectionTitle } from '../StyledStandardSectionTitle';
import { StyledSlider, StyledSliderDots } from '../StyledSlider/StyledSlider';
import { StyledComment } from './StyledComment';
import { getImages } from '../img';

const HappyClientsWrapper = styled(StyledWrapper)`
  padding-top: 120px;
  padding-bottom: 130px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;
const HappyClientsTitle = styled(StyledStandardSectionTitle)`
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    align-self: center;
  }
`;

const theme = {
  dotColor: '#ccdee3',
  activeDotColor: 'var(--accent-color-active)',
};

const getUserPhotos = (name: string) => {
  return getImages(`happyClientsSlider/${name}`, ['jpg', 'webp'], 'object');
};

export interface Props {
  className?: string;
}

const HappyClientsSlider: React.FC<Props> = ({ className }) => (
  <ThemeProvider theme={theme}>
    <section>
      <HappyClientsWrapper>
        <HappyClientsTitle rowOne="Happy" rowTwo="Clients" />
        <StyledSlider className={className}>
          <StyledComment photos={getUserPhotos('user1')} name="Misha Merinov">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the when an unknown printer
            took a galley of type and scrambled it to make. a type specimen book. It has survived
            not only five centuries. but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </StyledComment>
          <StyledComment photos={getUserPhotos('user2')} name="Grisha Gremlinov">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the when an unknown printer
            took a galley of type and scrambled it to make. a type specimen book. It has survived
            not only five centuries. but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </StyledComment>
          <StyledComment photos={getUserPhotos('user3')} name="Taras Aueshkin">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the when an unknown printer
            took a galley of type and scrambled it to make. a type specimen book. It has survived
            not only five centuries. but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </StyledComment>
          <StyledComment photos={getUserPhotos('user4')} name="Valentin Pidorkin">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the when an unknown printer
            took a galley of type and scrambled it to make. a type specimen book. It has survived
            not only five centuries. but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </StyledComment>
        </StyledSlider>
      </HappyClientsWrapper>
    </section>
  </ThemeProvider>
);

const StyledHappyClientsSlider = styled(HappyClientsSlider)`
  position: relative;

  ${StyledSliderDots} {
    position: absolute;
    top: -8px;
    right: 0;

    @media (max-width: 1000px) {
      right: 50%;
      transform: translateX(50%);
    }
  }
`;

export { StyledHappyClientsSlider };
