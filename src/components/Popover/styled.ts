import styled from 'styled-components';
import { animated } from 'react-spring';

import { TStyledComponentsProps, getComponentStyle, normalizeMixin } from 'lib';

import type { TPopoverTargetStyle } from './types';

export const StyledPopoverTarget = styled.span<{ isOpen: boolean; targetStyle?: TPopoverTargetStyle }>`
  ${normalizeMixin};
  display: inline-flex;

  ${({ targetStyle, isOpen, theme }) => getComponentStyle(targetStyle, { isOpen, theme })}
`;

export const StyledPopover = styled.div<{ isPopoverOpen: boolean; popoverStyle?: TStyledComponentsProps }>`
  ${normalizeMixin};

  width: inherit;
  min-height: 50px;
  padding: 2px 0;
  border-radius: 8px;
  box-shadow: ${({ isPopoverOpen, theme }) => (isPopoverOpen ? `0 0 0 4px ${theme.palette.primary_700}` : 'none')};
  background: ${({ theme }) => theme.palette.white};
  transition-property: box-shadow;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  transition-delay: 0.6s;

  ${({ popoverStyle, theme }) => getComponentStyle(popoverStyle, { theme })}
`;

export const StyledAnimateContainer = styled(animated.div)<{
  styled?: TStyledComponentsProps;
}>`
  z-index: 10;

  &[data-popper-placement='top'] {
    transform-origin: bottom;
  }

  &[data-popper-placement='bottom'] {
    transform-origin: top;
  }

  &[data-popper-placement='bottom-start'] {
    transform-origin: top left;
  }

  &[data-popper-placement='bottom-end'] {
    transform-origin: top right;
  }

  &[data-popper-placement='right'] {
    transform-origin: left;
  }

  &[data-popper-placement='right-start'] {
    transform-origin: left top;
  }

  &[data-popper-placement='right-end'] {
    transform-origin: left bottom;
  }

  &[data-popper-placement='left'] {
    transform-origin: right;
  }

  &[data-popper-placement='left-start'] {
    transform-origin: right top;
  }

  &[data-popper-placement='left-end'] {
    transform-origin: right bottom;
  }

  &[data-popper-placement='top-start'] {
    transform-origin: bottom left;
  }

  &[data-popper-placement='top-end'] {
    transform-origin: bottom right;
  }

  ${({ styled, theme }) => getComponentStyle(styled, { theme })}
`;
