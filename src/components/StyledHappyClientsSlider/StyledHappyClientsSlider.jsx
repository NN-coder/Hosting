/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import StyledWrapper from '../StyledWrapper';
import StyledStandardSectionTitle from '../StyledStandardSectionTitle';
import StyledSlider, { StyledSliderDots } from '../StyledSlider/StyledSlider';
import StyledComment from './StyledComment';

const HappyClientsWrapper = styled(StyledWrapper)`
  padding: 120px 0 130px;

  @media (max-width: 1250px) {
    padding: 120px 20px 130px;
  }
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

const images = require.context('./img');
const getImagePath = (name) => images(name).default;

const HappyClientsSlider = ({ className }) => (
  <ThemeProvider theme={theme}>
    <section>
      <HappyClientsWrapper>
        <HappyClientsTitle rowOne="Happy" rowTwo="Clients" />
        <StyledSlider className={className}>
          <StyledComment
            photo={{ webp: getImagePath('./user1.webp'), jpg: getImagePath('./user1.jpg') }}
            name="Misha Merinov"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the when an unknown printer
            took a galley of type and scrambled it to make. a type specimen book. It has survived
            not only five centuries. but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </StyledComment>
          <StyledComment
            photo={{ webp: getImagePath('./user2.webp'), jpg: getImagePath('./user2.jpg') }}
            name="Grisha Gremlinov"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the when an unknown printer
            took a galley of type and scrambled it to make. a type specimen book. It has survived
            not only five centuries. but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </StyledComment>
          <StyledComment
            photo={{ webp: getImagePath('./user3.webp'), jpg: getImagePath('./user3.jpg') }}
            name="Taras Aueshkin"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the when an unknown printer
            took a galley of type and scrambled it to make. a type specimen book. It has survived
            not only five centuries. but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </StyledComment>
          <StyledComment
            photo={{ webp: getImagePath('./user4.webp'), jpg: getImagePath('./user4.jpg') }}
            name="Valentin Pidorkin"
          >
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

HappyClientsSlider.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledHappyClientsSlider = styled(HappyClientsSlider)`
  position: relative;

  ${StyledSliderDots} {
    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: 1000px) {
      right: 50%;
      transform: translateX(50%);
    }
  }
`;

export default StyledHappyClientsSlider;
