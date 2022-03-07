import styled from 'styled-components';

import { Typography } from 'components/Typography';

export const StyledSelectionBox = styled.label`
  display: flex;
  width: fit-content;
  margin: 0;
`;

export const StyledSelectionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const StyledDescription = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey_700};
`;
