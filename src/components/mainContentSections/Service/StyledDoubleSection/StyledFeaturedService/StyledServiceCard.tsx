import React from 'react';
import styled from 'styled-components';

import { LazyImage } from '../../../../LazyImage';

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

export interface Props {
  serviceName: string;
  children: string;
  images: {
    jpg: string;
    webp?: string;
  };
  className?: string;
}

const ServiceCard: React.FC<Props> = ({ className, images, serviceName, children }) => (
  <div className={className}>
    <ServiceCardImg image={images.jpg} imageWebp={images.webp} />
    <ServiceCardInner>
      <ServiceCardTitle>{serviceName}</ServiceCardTitle>
      <ServiceCardText>{children}</ServiceCardText>
    </ServiceCardInner>
  </div>
);

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

export { StyledServiceCard };
