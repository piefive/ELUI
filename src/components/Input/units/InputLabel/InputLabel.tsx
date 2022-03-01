import { Typography } from '../../../Typography';

import type { TInputLabel } from './types';
import { StyledInputLabel, StyledRequired } from './styled';

export const InputLabel = ({ onLabelClick, label, isRequired }: TInputLabel) => {
  return (
    <StyledInputLabel onClick={onLabelClick}>
      <Typography variant="st1">{label}</Typography>
      {isRequired && <StyledRequired>*</StyledRequired>}
    </StyledInputLabel>
  );
};
