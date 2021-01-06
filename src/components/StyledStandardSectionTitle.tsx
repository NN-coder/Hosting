import React from 'react';
import styled from 'styled-components';

const Before = styled.div.attrs({
  'aria-hidden': true,
})<{ line?: boolean }>`
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
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: 0.025em;
`;
const RowTwo = styled.div`
  font-size: 3rem;
  letter-spacing: -0.025em;
`;

const OnlyOneRow = styled.div`
  font-size: 1.4rem;
  letter-spacing: 0.05em;
`;

export interface Props {
  rowOne: string;
  rowTwo?: string;
  className?: string;
  beforeImg?: React.ReactNode;
}

const StandardSectionTitle: React.FC<Props> = ({ className, rowOne, rowTwo, beforeImg }) => (
  <h3 className={className}>
    {!!beforeImg && <Before>{beforeImg}</Before>}
    {!beforeImg && <Before line />}
    {!!rowTwo && (
      <>
        <RowOne>{rowOne}</RowOne>
        <RowTwo>{rowTwo}</RowTwo>
      </>
    )}
    {!rowTwo && <OnlyOneRow>{rowOne}</OnlyOneRow>}
  </h3>
);

const StyledStandardSectionTitle = styled(StandardSectionTitle)`
  position: relative;
  grid-column: 1 / -1;
  color: var(--text-color-primary);
  font-weight: 800;
  white-space: nowrap;
  text-transform: uppercase;
`;

export { StyledStandardSectionTitle };
