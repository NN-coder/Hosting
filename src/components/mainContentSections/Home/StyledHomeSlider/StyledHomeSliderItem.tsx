import styled from 'styled-components';

const images = require.context('./img');
const getImagePath = (name: string): string => images(name).default;

// TODO: Add lazy loading for background images
const StyledHomeSliderItem = styled.div<{ number: number | string }>`
  position: relative;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 1600.1px) {
    background-image: url(${({ number }) => getImagePath(`./slide-${number}_2048x1152.jpg`)});
  }
  @media (min-width: 1250.1px) and (max-width: 1600px) {
    background-image: url(${({ number }) => getImagePath(`./slide-${number}_1600x900.jpg`)});
  }
  @media (min-width: 700.1px) and (max-width: 1250px) {
    background-image: url(${({ number }) => getImagePath(`./slide-${number}_1280x720.jpg`)});
  }
  @media (min-width: 500.1px) and (max-width: 700px) {
    background-image: url(${({ number }) => getImagePath(`./slide-${number}_720x1280.jpg`)});
  }
  @media (max-width: 500px) {
    background-image: url(${({ number }) => getImagePath(`./slide-${number}_540x960.jpg`)});
  }
`;

export default StyledHomeSliderItem;
