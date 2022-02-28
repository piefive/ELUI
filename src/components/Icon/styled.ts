import styled from 'styled-components';

import { TStyledComponentsProps, getComponentStyle } from 'lib';

type TStyledSvg = {
  size: number;
  iconStyle?: TStyledComponentsProps;
};

export const StyledSvg = styled.svg<TStyledSvg>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px;
  min-height: ${({ size }) => size}px;
  stroke: currentColor;
  fill: none;
  transition: opacity ease-out 0.3s;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};

  ${({ iconStyle, theme }) => getComponentStyle(iconStyle, { theme })}
`;
