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
  const [value, setValue] = useState(3);

  return (
    <>
      <StyledBox>
        <SegmentedControl<number> {...args} onSegmentChange={setValue} activeSegment={value}>
          <SegmentedControl.Segment value={0} leftSlot={<Icon.Mail />}>
            1
          </SegmentedControl.Segment>
          <SegmentedControl.Segment value={1} disabled>
            <Icon.Info />
          </SegmentedControl.Segment>
          <SegmentedControl.Segment value={2} leftSlot={<Icon.Grid />}>
            3
          </SegmentedControl.Segment>
          <SegmentedControl.Segment value={3} leftSlot={<Icon.Clipboard />}>
            4
          </SegmentedControl.Segment>
          <SegmentedControl.Segment value={4}>5+</SegmentedControl.Segment>
        </SegmentedControl>
      </StyledBox>
    </>
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
