import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Switch } from './Switch';
import type { TSwitch, TSwitchHandler } from './types';

export default {
  title: 'ui/Switch',
  component: Switch,
  argTypes: {
    checkedSlot: { control: { type: null } },
    uncheckedSlot: { control: { type: null } },
    onChange: { control: { type: null } },
  },
  args: {
    className: '',
    checked: false,
    disabled: false,
    isLoading: false,
    boxStyle: { visibility: 'visible' },
    toggleStyle: { visibility: 'visible' },
  },
};

export const Default = (args: TSwitch) => {
  const { checked: controlledChecked } = args;
  const [checked, setChecked] = useState(controlledChecked ?? false);

  const handleChange: TSwitchHandler = (checked, event) => {
    args?.onChange?.(checked, event);
    setChecked(checked);
  };

  useEffect(() => {
    setChecked(controlledChecked);
  }, [controlledChecked]);

  return (
    <StyledBox>
      <Switch {...args} onChange={handleChange} {...{ checked }} />
    </StyledBox>
  );
};

const StyledBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  padding: 16px;
  border-radius: 8px;
  overflow: auto;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
