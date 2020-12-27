import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

const Icon = ({ children, viewBox, className }) => {
  const { size = '1em', color = 'inherit', attr, style } = useContext(IconContext);

  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox={viewBox}
      height={size}
      width={size}
      color={color}
      style={style}
      aria-hidden={!!attr?.['aria-hidden']}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

Icon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  viewBox: PropTypes.string.isRequired,
  className: PropTypes.string,
};
Icon.defaultProps = {
  className: null,
};

export default Icon;
