import type { TMenuValue } from 'components/Menu';
import { Chip, TChipHandler } from 'components/Chip';
import { Typography } from 'components/Typography';
import { isArrayEmpty } from 'lib';

import type { TSelectValue } from './types';
import { StyledChips } from './styled';

export const SelectValue = <SelectValue extends TMenuValue = TMenuValue>({
  values,
  isMultiple,
  onClear,
  children,
}: TSelectValue<SelectValue>) => {
  if (isMultiple) {
    const onDelete: TChipHandler = onClear ? ({ value }) => onClear(value) : undefined;

    return (
      <StyledChips isEmpty={isArrayEmpty(values)}>
        {values.map(({ value, children }, i) => (
          <Chip<SelectValue> key={`${i}_${value}`} {...{ value, onDelete }} checked>
            {children}
          </Chip>
        ))}
        {children}
      </StyledChips>
    );
  }

  return <>{children || <Typography>{values[0]?.children}</Typography>}</>;
};
