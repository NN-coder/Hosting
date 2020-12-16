import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const images = require.context('./img');
const getImagePath = (name) => images(name).default;

const HomeSliderItem = ({ className, children }) => <div className={className}>{children}</div>;

HomeSliderItem.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

// TODO: Add lazy loading for background images
const StyledHomeSliderItem = styled(HomeSliderItem)`
  position: relative;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 1600.1px) {
    background-image: url(${(props) => getImagePath(`./slide-${props.number}_2048x1152.jpg`)});
  }
  @media (min-width: 1250.1px) and (max-width: 1600px) {
    background-image: url(${(props) => getImagePath(`./slide-${props.number}_1600x900.jpg`)});
  }
  @media (min-width: 700.1px) and (max-width: 1250px) {
    background-image: url(${(props) => getImagePath(`./slide-${props.number}_1280x720.jpg`)});
  }
  @media (min-width: 500.1px) and (max-width: 700px) {
    background-image: url(${(props) => getImagePath(`./slide-${props.number}_720x1280.jpg`)});
  }
  @media (max-width: 500px) {
    background-image: url(${(props) => getImagePath(`./slide-${props.number}_540x960.jpg`)});
  }
`;

export default StyledHomeSliderItem;
