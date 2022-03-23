import styled from 'styled-components';

const ICON_RIGHT_SIZE = 24;

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
  padding: 8px;
  margin: 4px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: ${({ theme }) => theme.palette.white};
`;
