import { css } from 'styled-components';

import { Typography } from 'components/Typography';

import type { TFieldLabel } from './types';
import { StyledFieldLabel } from './styled';

export const FieldLabel = ({ onClick, label, isRequired }: TFieldLabel) => {
  return (
    <StyledFieldLabel {...{ onClick }}>
      <Typography variant="st1">{label}</Typography>
      {isRequired && (
        <Typography
          typographyStyle={({ theme }) => css`
            color: ${theme.palette.grey_700};
          `}
        >
          *
        </Typography>
      )}
    </StyledFieldLabel>
  );
};
