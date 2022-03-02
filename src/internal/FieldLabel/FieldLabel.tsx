import { Typography } from 'components';

import type { TFieldLabel } from './types';
import { StyledFieldLabel, StyledRequired } from './styled';

export const FieldLabel = ({ onClick, label, isRequired }: TFieldLabel) => {
  return (
    <StyledFieldLabel {...{ onClick }}>
      <Typography variant="st1">{label}</Typography>
      {isRequired && <StyledRequired>*</StyledRequired>}
    </StyledFieldLabel>
  );
};
