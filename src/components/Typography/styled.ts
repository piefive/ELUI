import styled, { DefaultTheme, css } from 'styled-components';

import { createException, getComponentStyle, normalizeMixin } from 'lib';

import type { TTypography, TTypographyVariant } from './types';

interface IStyledTypography extends Pick<TTypography, 'variant' | 'typographyStyle' | 'color'> {
  theme: DefaultTheme;
  variant: TTypographyVariant;
}

const getTypographyVariant = ({ variant }: IStyledTypography) => {
  switch (variant) {
    case 'h1':
      return css`
        font-weight: 400;
        font-size: 96px;
        line-height: 112px;
        letter-spacing: -1.5px;
      `;
    case 'h2':
      return css`
        font-weight: 400;
        font-size: 48px;
        line-height: 64px;
        letter-spacing: 0;
      `;
    case 'h3':
      return css`
        font-weight: 400;
        font-size: 48px;
        line-height: 64px;
        letter-spacing: 0;
      `;
    case 'h4':
      return css`
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        letter-spacing: 0.25px;
      `;
    case 'h5':
      return css`
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0;
      `;
    case 'h6':
      return css`
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.15px;
      `;
    case 'st1':
      return css`
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
      `;
    case 'st2':
      return css`
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
      `;
    case 'b1':
      return css`
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
      `;
    case 'b2':
      return css`
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
      `;
    case 'caption':
      return css`
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.5px;
      `;
    case 'overline':
      return css`
        font-weight: 700;
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
  color: ${({ color, theme }) => (color === 'inherit' || !color ? 'inherit' : theme.palette[color])};

  ${getTypographyVariant};

  ${({ theme, typographyStyle }) => getComponentStyle(typographyStyle, { theme })};
`;
