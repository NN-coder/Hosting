import React from 'react';
import LazyLoad from 'react-lazyload';

export interface Props {
  image: string;
  imageWebp?: string;
  offset?: number;
  once?: boolean;
  className?: string;
  alt?: string;
}

const LazyImage: React.FC<Props> = ({ offset, once, image, imageWebp, alt, className }) => (
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

LazyImage.defaultProps = {
  offset: 100,
  once: true,
  imageWebp: '',
  alt: '',
};

export default LazyImage;
