import styled from 'styled-components';

import type { TChipCheckedIcon } from './types';

export const StyledChipCheckedIcon = styled.div<TChipCheckedIcon>`
  display: flex;
  align-items: center;
  width: ${({ checked }) => (checked ? 24 : 0)}px;
  overflow: hidden;
  transition: width 0.3s ease-out;
  will-change: width;
  color: inherit;
`;
