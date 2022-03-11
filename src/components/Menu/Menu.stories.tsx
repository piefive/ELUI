import { equals } from 'ramda';
import { useState } from 'react';
import styled from 'styled-components';

import { isArray } from 'lib/utils';
import { useUpdateEffect } from 'lib/hooks';
import { Icon } from 'components/Icon';

import type { IMenu } from './types';
import { Menu, MenuComponent } from './Menu';

export default {
  title: 'ui/Menu',
  component: MenuComponent,
  argTypes: {
    onChange: { control: { type: null } },
    activeValues: { control: { type: null } },
    multiple: { control: { type: 'boolean' } },
  },
  args: {
    multiple: false,
  },
};

export const Default = (arg: IMenu) => {
  const [value, setValue] = useState<number[] | number>(arg.multiple ? [] : undefined);

  const handleChange = (value: number) => {
    arg.onChange(value);

    setValue(old => {
      if (arg.multiple && isArray(old)) return old.includes(value) ? old.filter(val => val !== value) : [...old, value];

      return value;
    });
  };

  useUpdateEffect(() => {
    setValue(arg.multiple ? [] : undefined);
  }, [arg.multiple]);

  return (
    <StyledBox>
      <Menu<number> {...arg} activeValues={value} onChange={handleChange}>
        <Menu.Item leftSlot={<Icon.Info />} value={1}>
          test 1
        </Menu.Item>
        <Menu.Item leftSlot="empty" value={2}>
          test 2
        </Menu.Item>
        <Menu.Item leftSlot={<Icon.Mail />} value={3}>
          test 3
        </Menu.Item>
      </Menu>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  overflow: auto;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
