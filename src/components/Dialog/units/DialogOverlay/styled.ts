import styled from 'styled-components';
import { animated } from 'react-spring';

import { hexToRgba } from 'lib';

export const StyledDialogOverlay = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => hexToRgba(theme.palette.grey_900, 0.5)};
`;
