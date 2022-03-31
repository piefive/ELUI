import styled, { css } from 'styled-components';

import type { TStyledComponentsProps } from 'lib';

export const StyledRightSlot = styled.div<{ rightSlotStyle?: TStyledComponentsProps }>`
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
