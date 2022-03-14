import styled from 'styled-components';

import { getComponentStyle } from 'lib';
import { BUTTON_CN } from 'components/Button';

import type { TEmpty } from './types';

export const StyledEmpty = styled.div<Pick<TEmpty, 'boxStyle' | 'placement'>>`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 360px;
  align-items: ${({ placement }) => (placement === 'left' ? 'start' : 'center')};
  text-align: ${({ placement }) => placement};

  ${({ theme, boxStyle }) => getComponentStyle(boxStyle, { theme })}
`;

export const StyledIllustration = styled.img<Pick<TEmpty, 'imageStyle'>>`
  position: relative;
  width: 192px;
  height: 192px;
  object-fit: cover;
  margin-bottom: 32px;

  ${({ theme, imageStyle }) => getComponentStyle(imageStyle, { theme })}
`;

export const StyledButtons = styled.div`
  .${BUTTON_CN} {
    &:last-of-type {
      margin-top: 16px;
    }

    &:first-of-type {
      margin-top: 24px;
    }
  }
`;
