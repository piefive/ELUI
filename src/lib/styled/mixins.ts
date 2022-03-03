import { css } from 'styled-components';

import { hexToRgba, isString } from '../utils';

export const normalizeMixin = css`
  &,
  * {
    box-sizing: border-box;
  }

  color: ${({ theme }) => theme.palette.grey_900};
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const smoothCornersMixin = (smoothCorners: { x?: number; y?: number }, borderRadius: string | number) => css`
  border-radius: ${isString(borderRadius) ? `${borderRadius}px` : borderRadius};

  @supports (mask-image: paint(smooth-corners)) or (-webkit-mask-image: paint(smooth-corners)) {
    border-radius: 0;
    mask-image: paint(smooth-corners);
    -webkit-mask-image: paint(smooth-corners);
    --smooth-corners: ${[smoothCorners?.x ?? 0, smoothCorners?.y].filter(Boolean).join(',')};
  }
`;

export const scrollBarMixin = css`
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb {
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: transparent;
    border: 10px solid transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px transparent;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 0 10px ${({ theme }) => theme.palette.grey_100};
    }
  }
`;

export const tabletMedia = css`
  ${({ theme }) => `min-width: ${theme.media.tablet}`}
`;

export const laptopMedia = css`
  ${({ theme }) => `min-width: ${theme.media.laptop}`}
`;

export const desktopMedia = css`
  ${({ theme }) => `min-width: ${theme.media.desktop}`}
`;
