import { equals } from 'ramda';
import { useState } from 'react';
import styled from 'styled-components';

import { Popover } from 'components/Popover';
import { Typography } from 'components/Typography';
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
        <Menu.Item leftSlot={<Icon.Info />} value={1} rightSlot={<Typography>1</Typography>}>
          item
        </Menu.Item>
        <Menu.Item leftSlot="empty" value={2} rightSlot={<Typography>2</Typography>}>
          item
        </Menu.Item>
        <Menu.Item leftSlot={<Icon.Mail />} value={3} rightSlot={<Typography>3</Typography>}>
          item
        </Menu.Item>
        <Menu.Item leftSlot={<Icon.Mail />} value={4} rightSlot={<Typography>4</Typography>} withSeparator>
          item
        </Menu.Item>
        <Popover
          popover={
            <div>
              <Menu.Item leftSlot={<Icon.Mail />} value={6} rightSlot={<Typography>5</Typography>}>
                item 6
              </Menu.Item>
              <Menu.Item leftSlot={<Icon.Mail />} value={7} rightSlot={<Typography>6</Typography>}>
                item 7
              </Menu.Item>
            </div>
          }
          placement="right"
          offset={[0, 5]}
        >
          <Menu.Item
            leftSlot="empty"
            checked={isArray(value) ? value.some(v => [6, 7].includes(v)) : [6, 7].includes(value)}
            rightSlot={<Icon.ChevronRight />}
          >
            item 5
          </Menu.Item>
        </Popover>
      </Menu>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  position: relative;
  display: block;
  width: 350px;
  padding: 2px 0;
  border-radius: 8px;
  overflow: auto;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
