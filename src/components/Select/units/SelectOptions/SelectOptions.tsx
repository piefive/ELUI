import { IMenu, Menu, TMenuValue } from 'components/Menu';

import { StyledOptions } from './styled';

export const SelectOptions = <SelectValue extends TMenuValue>({ children, ...rest }: IMenu<SelectValue>) => {
  return (
    <StyledOptions>
      <Menu<SelectValue> {...rest}>{children}</Menu>
    </StyledOptions>
  );
};
