import React from 'react';
import styled from 'styled-components/macro';
import LazyLoad from 'react-lazyload';

const Picture = styled.picture`
  display: contents;
`;

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
    {!imageWebp ? (
      <img className={className} src={image} alt={alt} />
    ) : (
      <Picture>
        <source srcSet={imageWebp} type="image/webp" />
        <img className={className} src={image} alt={alt} />
      </Picture>
    )}
  </LazyLoad>
);

LazyImage.defaultProps = {
  offset: 100,
  once: true,
};

export { LazyImage };
