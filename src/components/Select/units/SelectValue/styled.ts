import styled from 'styled-components';

export const StyledChips = styled.div<{ isEmpty: boolean }>`
  display: flex;
  gap: 4px;
  margin: ${({ isEmpty }) => (isEmpty ? 0 : -6)}px;
  padding-right: 8px;

  box-sizing: border-box;
  position: relative;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1 0;
  overflow: hidden;
`;
