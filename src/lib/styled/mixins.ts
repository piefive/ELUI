import { css } from 'styled-components';

import { isNumber } from '../utils';

export const normalizeMixin = css`
  &,
  * {
    box-sizing: border-box;
  }

  color: ${({ theme }) => theme.palette.grey_900};
  font-family: ${({ theme }) => theme.fontFamily};
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

export const figmaSmoothCornersMixin = (borderRadius: string | number, cornerSmoothing: number) => css`
  border-radius: ${isNumber(borderRadius) ? `${borderRadius}px` : borderRadius};

  @supports (mask-image: paint(figma-smooth-corners)) or (-webkit-mask-image: paint(figma-smooth-corners)) {
    border-radius: 0;
    --corner-radius: ${parseInt(borderRadius.toString())};
    --corner-smoothing: ${cornerSmoothing};
    mask-image: paint(figma-smooth-corners);
    -webkit-mask-image: paint(figma-smooth-corners);
  }
`;

export const scrollBarMixin = css`
  @media (${tabletMedia}) {
    ::-webkit-scrollbar {
      width: 4px;
      height: 26px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb:vertical {
      border-radius: 4px 0 0 4px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-button:vertical {
      display: block;
      height: 8px;
      background-color: transparent;
      border-color: transparent;
    }

    &:hover {
      ::-webkit-scrollbar-thumb:vertical {
        background: ${({ theme }) => theme.palette.grey_400};
      }
    }
  }
`;
