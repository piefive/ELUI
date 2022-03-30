import styled from 'styled-components';

import { normalizeMixin } from 'lib';
import { Typography } from 'components/Typography';

export const StyledSearch = styled.div`
  position: relative;
  max-width: 70%;
`;

export const StyledSearchInput = styled.input`
  ${normalizeMixin};

  max-width: 100%;
  z-index: 1;
  border: 0;
  background-color: transparent;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const StyledHiddenText = styled(Typography)`
  position: absolute;
  visibility: hidden;
  left: -10000000px;
`;
