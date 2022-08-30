import { Typography } from 'components/Typography';

import type { TFieldLabel } from './types';
import { StyledFieldLabel } from './styled';

export const FieldLabel = ({ onClick, label, isRequired }: TFieldLabel) => {
  return (
    <StyledFieldLabel {...{ onClick }}>
      <Typography variant="st1">{label}</Typography>
      {isRequired && <Typography typographyStyle={({ theme }) => ({ color: theme.palette.error })}>*</Typography>}
    </StyledFieldLabel>
  );
};
