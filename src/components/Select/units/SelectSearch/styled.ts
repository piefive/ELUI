import styled from 'styled-components';

import { normalizeMixin } from 'lib';
import { Typography } from 'components/Typography';

export const StyledSearch = styled.div`
  position: relative;
`;

export const StyledSearchInput = styled.input`
  ${normalizeMixin};

  max-width: 100%;
  height: 100%;
  z-index: 1;
  border: 0;
  padding-top: 2px;
  margin-left: -2px;
  font-size: 16px;
  letter-spacing: 0.5px;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const StyledHiddenText = styled(Typography)`
  position: absolute;
  visibility: hidden;
  left: -10000000px;
`;
