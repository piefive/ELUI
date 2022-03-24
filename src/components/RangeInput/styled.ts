import styled from 'styled-components';

import { ICON_CN } from 'components/Icon';

const ICON_RIGHT_SIZE = 24;

export const StyledTrack = styled.div`
  position: relative;
  height: 100%;
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
  right: -${ICON_RIGHT_SIZE}px;
`;

export const StyledThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 8px);
  min-width: 40px;
  padding: 8px;
  margin: 0 4px;
  border-radius: 4px;
  cursor: pointer;
  touch-action: none;
  background-color: ${({ theme }) => theme.palette.white};
  transition-property: width, box-shadow;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
`;

export const StyledRail = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.grey_200};

  .${ICON_CN} {
    opacity: 0;
  }

  &:hover {
    ${StyledTrack} {
      background-color: ${({ theme }) => theme.palette.primary_400};
    }
  }

  &:focus {
    outline: none;

    ${StyledTrack} {
      background-color: ${({ theme }) => theme.palette.primary_400};
    }

    ${StyledThumb} {
      box-shadow: 0 0 0 4px ${({ theme }) => theme.palette.primary_800};
    }

    .${ICON_CN} {
      opacity: 1;
    }
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
