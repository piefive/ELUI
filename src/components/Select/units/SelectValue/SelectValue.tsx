import type { TMenuValue } from 'components/Menu';
import { Chip } from 'components/Chip';
import { Typography } from 'components/Typography';

import type { TSelectValue } from './types';
import { StyledChips } from './styled';

export const SelectValue = <SelectValue extends TMenuValue = TMenuValue>({
  values,
  isMultiple,
}: TSelectValue<SelectValue>) => {
  if (isMultiple)
    return (
      <StyledChips>
        {values.map(({ value, children }) => (
          <Chip checked {...{ value }}>
            {children}
          </Chip>
        ))}
      </StyledChips>
    );

  return <Typography>{values[0].children}</Typography>;
};
