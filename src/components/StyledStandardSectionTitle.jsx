import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Before = styled.div.attrs({
  'aria-hidden': true,
})`
  position: absolute;
  bottom: ${({ line }) => (line ? 'calc(100% + 10px)' : 'calc(100% + 5px)')};
  left: 0;
  width: ${({ line }) => (line ? '20px' : 'auto')};
  height: ${({ line }) => (line ? '2px' : 'auto')};
  color: var(--accent-color);
  background: ${({ line }) => (line ? 'currentColor' : 'none')};
`;
const RowOne = styled.div`
  color: #859aa1;
  font-size: 1.8rem;
  letter-spacing: 0.025em;
`;
const RowTwo = styled.div`
  color: var(--text-color-primary);
  font-weight: 800;
  font-size: 3rem;
  letter-spacing: -0.025em;
`;

const StandardSectionTitle = ({ className, rowOne, rowTwo, beforeImg }) => (
  <h3 className={className}>
    {beforeImg && <Before>{beforeImg}</Before>}
    {!beforeImg && <Before line />}
    <RowOne>{rowOne}</RowOne>
    <RowTwo>{rowTwo}</RowTwo>
  </h3>
);

StandardSectionTitle.propTypes = {
  className: PropTypes.string,
  rowOne: PropTypes.string.isRequired,
  rowTwo: PropTypes.string.isRequired,
  beforeImg: PropTypes.node,
};
StandardSectionTitle.defaultProps = {
  className: null,
  beforeImg: null,
};

const StyledStandardSectionTitle = styled(StandardSectionTitle)`
  position: relative;
  grid-column: 1 / -1;
  white-space: nowrap;
  text-transform: uppercase;
`;

export default StyledStandardSectionTitle;
