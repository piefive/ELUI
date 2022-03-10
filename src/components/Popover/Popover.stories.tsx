import { Button } from 'components/Button';

import { Popover } from './Popover';
import type { TPopover } from './types';

export default {
  component: Popover,
  title: 'ui/Popover',
  argTypes: {
    popover: { control: 'text', defaultValue: 'in popover' },
    popoverStyle: { defaultValue: { minWidth: 370 } },
    targetStyle: { defaultValue: { width: 'fit-content' } },
    placement: { defaultValue: 'bottom-start' },
  },
};

export const Default = (args: TPopover<HTMLButtonElement>) => (
  <Popover {...args}>
    <Button>click me</Button>
  </Popover>
);

export const Controlled = (args: TPopover<HTMLButtonElement>) => (
  <Popover<HTMLButtonElement> {...args}>
    {({ ref, onToggle, isPopoverOpen }) => (
      <div>
        <Button variant={isPopoverOpen ? 'primary' : 'outline'} onClick={onToggle} {...{ ref }}>
          click me
        </Button>
      </div>
    )}
  </Popover>
);
