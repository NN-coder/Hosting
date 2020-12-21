import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LazyImage from '../../../../LazyImage';

const ServiceCardImg = styled(LazyImage)`
  width: 265px;
`;

const ServiceCardInner = styled.div``;
const ServiceCardTitle = styled.div`
  margin-bottom: 15px;
  color: var(--text-color-primary);
  font-weight: 800;
`;
const ServiceCardText = styled.p`
  color: var(--text-color);
  line-height: 24px;
  letter-spacing: 0.01em;
`;

const ServiceCard = ({ className, images, serviceName, children: text }) => (
  <div className={className}>
    <ServiceCardImg image={images.image} imageWebp={images.imageWebp} />
    <ServiceCardInner>
      <ServiceCardTitle>{serviceName}</ServiceCardTitle>
      <ServiceCardText>{text}</ServiceCardText>
    </ServiceCardInner>
  </div>
);

ServiceCard.propTypes = {
  className: PropTypes.string.isRequired,
  images: PropTypes.shape({
    image: PropTypes.string,
    imageWebp: PropTypes.string,
  }).isRequired,
  serviceName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

const StyledServiceCard = styled(ServiceCard)`
  display: flex;
  align-items: center;
  margin-top: 30px;
  column-gap: 30px;

  @media (max-width: 700px) {
    flex-direction: column;
    ${ServiceCardInner} {
      display: contents;
    }
    ${ServiceCardTitle} {
      margin: 15px 0;
    }
  }
`;

export default StyledServiceCard;
