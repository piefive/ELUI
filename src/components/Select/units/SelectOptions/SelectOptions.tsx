import { IMenu, Menu, TMenuValue, useMenuNavigate } from 'components/Menu';

import { StyledOptions } from './styled';

export const SelectOptions = <SelectValue extends TMenuValue>({ children, ...rest }: IMenu<SelectValue>) => {
  const bindNavigate = useMenuNavigate();

  return (
    <StyledOptions>
      <Menu<SelectValue> {...bindNavigate} {...rest}>
        {children}
      </Menu>
    </StyledOptions>
  );
};
