import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//* ================================================== Styles ==================================================
const SectionTitle = styled.h3`
  position: relative;
  grid-column: 1 / -1;
  white-space: nowrap;
  text-transform: uppercase;
`;
const Before = styled.div`
  position: absolute;
  bottom: ${(props) => (props.line ? 'calc(100% + 10px)' : 'calc(100% + 5px)')};
  left: 0;
  width: ${(props) => (props.line ? '20px' : 'auto')};
  height: ${(props) => (props.line ? '2px' : 'auto')};
  background: ${(props) => (props.line ? '#fb6b45' : 'none')};
`;
const RowOne = styled.div`
  color: #859aa1;
  font-size: 1.8rem;
  letter-spacing: 0.025em;
`;
const RowTwo = styled.div`
  color: #556b72;
  font-weight: 800;
  font-size: 3rem;
  letter-spacing: -0.025em;
`;

//* ================================================== Code ==================================================
const StandardSectionTitle = ({ rowOne, rowTwo, beforeImg }) => (
  <SectionTitle>
    {beforeImg && <Before>{beforeImg}</Before>}
    {!beforeImg && <Before line />}
    <RowOne>{rowOne}</RowOne>
    <RowTwo>{rowTwo}</RowTwo>
  </SectionTitle>
);

StandardSectionTitle.propTypes = {
  rowOne: PropTypes.string.isRequired,
  rowTwo: PropTypes.string.isRequired,
  beforeImg: PropTypes.node,
};
StandardSectionTitle.defaultProps = {
  beforeImg: null,
};

export default StandardSectionTitle;
