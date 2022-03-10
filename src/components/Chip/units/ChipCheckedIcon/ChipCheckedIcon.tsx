import { Icon } from 'components/Icon';

import type { TChipCheckedIcon } from './types';
import { StyledChipCheckedIcon } from './styled';

export const ChipCheckedIcon = ({ checked }: TChipCheckedIcon) => {
  return (
    <StyledChipCheckedIcon {...{ checked }}>
      <Icon.Check size={16} />
    </StyledChipCheckedIcon>
  );
};
