import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const LazyImage = ({ offset, once, image, imageWebp, alt, className }) => (
  <LazyLoad offset={offset} once={once}>
    {!!imageWebp && (
      <picture style={{ display: 'contents' }}>
        <source srcSet={imageWebp} type="image/webp" />
        <img className={className} src={image} alt={alt} />
      </picture>
    )}
    {!imageWebp && <img className={className} src={image} alt={alt} />}
  </LazyLoad>
);

LazyImage.propTypes = {
  image: PropTypes.string.isRequired,
  offset: PropTypes.number,
  once: PropTypes.bool,
  imageWebp: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
LazyImage.defaultProps = {
  offset: 100,
  once: true,
  imageWebp: '',
  alt: '',
  className: null,
};

export default LazyImage;
