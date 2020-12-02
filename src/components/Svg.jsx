import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({ width, height, children, className, viewBox, fill, ariaHidden }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={viewBox}
    style={{ enableBackground: `new ${viewBox}` }}
    fill={fill}
    aria-hidden={ariaHidden}
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    xmlSpace="preserve"
  >
    {children}
  </svg>
);

Svg.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaHidden: PropTypes.bool,
};
Svg.defaultProps = {
  className: '',
  viewBox: '0 0 512 512',
  fill: '',
  ariaHidden: true,
};

export default Svg;
