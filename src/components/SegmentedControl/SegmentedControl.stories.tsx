import { useState } from 'react';
import styled from 'styled-components';

import { Icon } from '../Icon';

import { SegmentedControl } from './SegmentedControl';
import type { ISegmentedControlComponent, TSegmentedControlHandler } from './types';

export default {
  title: 'ui/SegmentedControl',
  component: SegmentedControl,
  args: {
    label: 'Label',
    isScrollable: true,
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

export const Default = (args: ISegmentedControlComponent) => {
  const [value, setValue] = useState('segment_0');

  const handleChange: TSegmentedControlHandler = event => {
    console.log(event);
    args.onSegmentChange(event);
    setValue(event.currentTarget.value);
  };

  return (
    <StyledBox>
      <SegmentedControl {...args} onSegmentChange={handleChange} activeSegment={value}>
        <SegmentedControl.Segment value="segment_0" leftSlot={<Icon.Mail />}>
          1
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="segment_1" disabled>
          <Icon.Info />
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="segment_2" leftSlot={<Icon.Grid />}>
          3
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="segment_3" leftSlot={<Icon.Clipboard />}>
          4
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="segment_4">5+</SegmentedControl.Segment>
      </SegmentedControl>
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
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
