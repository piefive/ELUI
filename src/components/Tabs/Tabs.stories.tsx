import { useState } from 'react';
import styled from 'styled-components';

import { Icon } from '../Icon';

import type { ITabsComponent } from './types';
import { Tabs } from './Tabs';

export default {
  title: 'ui/Tabs',
  component: Tabs,
};

export const Default = (args: ITabsComponent) => {
  const [value, setValue] = useState(24);

  const contents = Array.from({ length: 43 });

  return (
    <StyledBox>
      <Tabs<number> {...args} onTabChange={setValue} activeTab={value}>
        {contents.map((_, i) => (
          <Tabs.Tab key={i} value={i} disabled={false} leftSlot={<Icon.Mail />}>
            Tab {i + 1}
          </Tabs.Tab>
        ))}
      </Tabs>
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
