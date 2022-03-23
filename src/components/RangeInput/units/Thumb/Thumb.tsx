import { Icon } from 'components/Icon';
import { Typography } from 'components/Typography';

import { StyledThumb, StyledThumbBox } from './styled';

export const Thumb = () => {
  return (
    <StyledThumbBox>
      <Icon.ChevronLeft iconStyle={({ theme }) => ({ color: theme.palette.white })} />
      <StyledThumb>
        <Typography color="inherit">40</Typography>
      </StyledThumb>
      <Icon.ChevronRight />
    </StyledThumbBox>
  );
};
