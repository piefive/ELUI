import styled from 'styled-components';

export const StyledInput = styled.input`
  flex: 1;
  min-width: 1px;
  height: 24px;
  padding: 0;
  border: none;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  background-color: transparent;
  color: inherit;
  cursor: inherit;
  font-family: inherit;

  &:focus {
    outline: none;
  }
`;
