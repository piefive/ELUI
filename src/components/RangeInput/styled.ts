import styled from 'styled-components';

const ICON_RIGHT_SIZE = 24;

export const StyledTrack = styled.div`
  position: relative;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.primary_700};
`;

export const StyledRail = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.grey_200};
`;

export const StyledInput = styled.input`
  position: absolute;
  left: -99999px;
  width: 0;
  height: 0;
  border: 0;
  background-color: transparent;
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
  user-select: none;
  touch-action: none;
  background-color: ${({ theme }) => theme.palette.white};
`;
