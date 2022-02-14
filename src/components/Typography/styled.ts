import styled, { DefaultTheme, css } from 'styled-components';

import { createException, getComponentStyle, normalizeMixin } from 'lib';

import type { TTypography, TTypographyVariant } from './types';

interface IStyledTypography
  extends Pick<TTypography, 'variant' | 'typographyStyle'> {
  theme: DefaultTheme;
  variant: TTypographyVariant;
}

const getTypographyVariant = ({ variant }: IStyledTypography) => {
  switch (variant) {
    case 'h1':
      return css`
        font-size: 96px;
        line-height: 112px;
      `;
    case 'h2':
      return css`
        font-size: 60px;
        line-height: 72px;
      `;
    case 'h3':
      return css`
        font-size: 48px;
        line-height: 64px;
      `;
    case 'h4':
      return css`
        font-size: 34px;
        line-height: 40px;
      `;
    case 'h5':
      return css`
        font-size: 24px;
        line-height: 32px;
      `;
    case 'h6':
      return css`
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
      `;
    case 'subtitle':
      return css`
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      `;
    case 'subtitle_bold':
      return css`
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
      `;
    case 'body_bold':
      return css`
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
      `;
    case 'body_normal':
      return css`
        font-size: 16px;
        line-height: 24px;
      `;
    case 'body_low':
      return css`
        font-size: 14px;
        line-height: 20px;
      `;
    case 'caption':
      return css`
        font-size: 12px;
        line-height: 16px;
      `;
    case 'overline':
      return css`
        font-size: 10px;
        line-height: 16px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
      `;
    default:
      createException('typography variant is null', { withName: true });
  }
};

export const StyledTypography = styled.div<IStyledTypography>`
  ${normalizeMixin};

  margin: 0;
  padding: 0;

  ${getTypographyVariant};

  ${({ theme, typographyStyle }) =>
    getComponentStyle(typographyStyle, { theme })};
`;
