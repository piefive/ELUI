import { useState } from 'react';
import styled from 'styled-components';

import { useUpdateEffect } from 'lib';
import { Icon } from 'components/Icon';

import type { IChipDefault, IChipInput, TChipHandler } from './types';
import { Chip } from './Chip';

export default {
  title: 'ui/Chip',
  component: Chip,
  args: {
    children: 'Chip',
    value: 'test value',
  },
  argTypes: {
    onChip: { control: { type: null } },
    onDelete: { control: { type: null } },
    ref: { control: { type: null } },
    leftSlot: { control: { type: null } },
  },
};

export const Input = (arg: IChipInput) => {
  const [checked, setChecked] = useState(Boolean(arg.checked));

  const onChip: TChipHandler = args => {
    setChecked(!args.checked);
    arg.onChip?.(args);
  };

  const onDelete: TChipHandler = args => {
    alert(JSON.stringify(args));
    arg.onDelete?.(args);
  };

  useUpdateEffect(() => {
    setChecked(arg.checked);
  }, [arg.checked]);

  return (
    <StyledBox>
      <Chip variant="input" {...arg} leftSlot={<Icon.Info size={16} />} {...{ checked, onChip, onDelete }}>
        {arg.children}
      </Chip>
    </StyledBox>
  );
};
Input.args = {
  disabled: false,
};
Input.argTypes = {
  scheme: { control: { type: null } },
};

export const Default = (arg: IChipDefault) => {
  return (
    <StyledBox>
      <Chip variant="default" {...arg}>
        {arg.children}
      </Chip>
    </StyledBox>
  );
};
Default.args = {
  onDelete: null,
};
Default.argTypes = {
  onDelete: { control: { type: null } },
  variant: { control: { type: null } },
  withCheckedIcon: { control: { type: null } },
  checked: { control: { type: null } },
  disabled: { control: { type: null } },
  leftSlot: { control: { type: null } },
};

const StyledBox = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
