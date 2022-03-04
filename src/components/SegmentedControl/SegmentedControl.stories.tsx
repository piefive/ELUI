import { useState } from 'react';
import styled from 'styled-components';

import { Icon } from '../Icon';

import { SegmentedControl } from './SegmentedControl';
import type { ISegmentedControlComponent } from './types';

export default {
  title: 'ui/SegmentedControl',
  component: SegmentedControl,
};

export const Default = (args: ISegmentedControlComponent) => {
  const [value, setValue] = useState(19);

  return (
    <>
      <StyledBox>
        <SegmentedControl<number> {...args} onSegmentChange={setValue} activeSegment={value}>
          {Array.from({ length: 19 }, (_, i) => i).map(val => (
            <SegmentedControl.Segment<typeof val> key={val} value={val}>
              Segment {val}
            </SegmentedControl.Segment>
          ))}
          <SegmentedControl.Segment value={19}>
            <Icon.Info />
          </SegmentedControl.Segment>
          <SegmentedControl.Segment value={20} leftSlot={<Icon.Info />} disabled>
            Segment 20
          </SegmentedControl.Segment>
          <SegmentedControl.Segment value={21} disabled>
            <Icon.Info />
          </SegmentedControl.Segment>
          <SegmentedControl.Segment value={22} leftSlot={<Icon.Info />}>
            Segment 22
          </SegmentedControl.Segment>
        </SegmentedControl>
      </StyledBox>
    </>
  );
};

const StyledBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 16px;
  border-radius: 8px;
  overflow: auto;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
