import styled, { css } from 'styled-components';

import { getAria } from 'lib';
import { ICON_CN } from 'components/Icon';

import { RANGE_CHEVRON_ICON_SIZE } from './constants';

export const StyledTrack = styled.div`
  position: relative;
  height: 100%;
  min-width: ${RANGE_CHEVRON_ICON_SIZE * 2}px;
  border-radius: 8px;
  transition: background-color 0.3s ease-out;
  background-color: ${({ theme }) => theme.palette.primary_700};
`;

export const StyledThumbBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;
  right: -${RANGE_CHEVRON_ICON_SIZE}px;
`;

export const StyledThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 8px);
  width: 40px;
  max-width: 40px;
  padding: 8px;
  margin: 0 4px;
  border-radius: 4px;
  cursor: pointer;
  touch-action: none;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.white};
  transition-property: box-shadow;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
`;

const thumbHoverMixin = css`
  ${StyledThumb} {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.palette.primary_800};
  }

  .${ICON_CN} {
    cursor: pointer;
    opacity: 1;
  }
`;

export const StyledRail = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.grey_200};

  .${ICON_CN} {
    cursor: default;
    opacity: 0;
  }

  &[${getAria('aria-disabled', true)}] {
    cursor: not-allowed;

    ${StyledTrack} {
      background-color: ${({ theme }) => theme.palette.primary_50};
    }

    ${StyledThumb} {
      cursor: not-allowed;
      color: ${({ theme }) => theme.palette.primary_50};
    }
  }

  &:not([${getAria('aria-disabled', true)}]):hover {
    ${StyledTrack} {
      background-color: ${({ theme }) => theme.palette.primary_400};
    }

    ${StyledThumbBox}:hover {
      ${thumbHoverMixin};
    }
  }

  &:not([${getAria('aria-disabled', true)}]):focus {
    outline: none;

    ${StyledTrack} {
      background-color: ${({ theme }) => theme.palette.primary_400};
    }

    ${thumbHoverMixin};
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  left: -99999px;
  width: 0;
  height: 0;
  border: 0;
  background-color: transparent;
`;
