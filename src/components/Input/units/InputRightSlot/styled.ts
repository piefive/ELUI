import styled, { css } from 'styled-components';

export const StyledRightSlot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContent = styled.div<{ withMargin: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ withMargin }) =>
    withMargin &&
    css`
      margin-left: 8px;
    `}
`;
