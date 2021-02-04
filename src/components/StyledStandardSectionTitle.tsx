import React from 'react';
import styled, { css } from 'styled-components';

const lineBeforeStyles = css`
  bottom: calc(100% + 10px);
  width: 20px;
  height: 2px;
  background-color: currentColor;
`;
const iconBeforeStyles = css`
  bottom: calc(100% + 5px);
`;

const Before = styled.div.attrs({
  'aria-hidden': true,
})<{ line?: boolean }>`
  position: absolute;
  left: 0;
  color: var(--accent-color);
  ${({ line }) => (line ? lineBeforeStyles : iconBeforeStyles)}
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
    {beforeImg ? <Before>{beforeImg}</Before> : <Before line />}
    {!rowTwo ? (
      <OnlyOneRow>{rowOne}</OnlyOneRow>
    ) : (
      <>
        <RowOne>{rowOne}</RowOne>
        <RowTwo>{rowTwo}</RowTwo>
      </>
    )}
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
