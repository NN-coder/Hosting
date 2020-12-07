import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionTitle = styled.h3`
  position: relative;
  grid-column: 1 / -1;
  white-space: nowrap;
  text-transform: uppercase;
`;
const Before = styled.div.attrs({
  'aria-hidden': true,
})`
  position: absolute;
  bottom: ${(props) => (props.line ? 'calc(100% + 10px)' : 'calc(100% + 5px)')};
  left: 0;
  width: ${(props) => (props.line ? '20px' : 'auto')};
  height: ${(props) => (props.line ? '2px' : 'auto')};
  background: ${(props) => (props.line ? 'var(--accent-color)' : 'none')};
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
  <SectionTitle className={className}>
    {beforeImg && <Before>{beforeImg}</Before>}
    {!beforeImg && <Before line />}
    <RowOne>{rowOne}</RowOne>
    <RowTwo>{rowTwo}</RowTwo>
  </SectionTitle>
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

export default StandardSectionTitle;
