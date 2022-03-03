import styled from 'styled-components';

import { scrollBarMixin } from 'lib';

export const StyledTextarea = styled.textarea`
  flex: 1;
  min-width: 1px;
  min-height: 144px;
  margin-top: -4px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  font-family: inherit;
  cursor: inherit;
  resize: none;
  color: inherit;
  will-change: height;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  ${scrollBarMixin}
`;
