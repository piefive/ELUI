import styled, { css } from 'styled-components';

import { Icon } from 'components/Icon';

const absoluteCenterMixin = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledCheckboxInput = styled.div`
  position: relative;
  width: 24px;
  min-width: 24px;
  height: 24px;
  min-height: 24px;
  border: 2px solid transparent;
  border-radius: 4px;
  background: transparent;
  transition-property: background-color, border-color, box-shadow;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
`;

export const StyledCheckIcon = styled(Icon.Check)<{ isChecked: boolean }>`
  ${absoluteCenterMixin};
  color: inherit;

  path {
    stroke-width: 3px;
  }
`;

export const StyledIndeterminate = styled.div`
  ${absoluteCenterMixin};

  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: currentColor;
`;

export const StyledCheckbox = styled.input`
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  visibility: hidden;
`;
