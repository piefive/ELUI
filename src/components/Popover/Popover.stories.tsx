import { Button } from 'components/Button';
import { Typography } from 'components/Typography';

import { Popover } from './Popover';
import type { TPopover } from './types';

export default {
  component: Popover,
  title: 'ui/Popover',
  argTypes: {
    popover: { control: 'text' },
  },
  args: {
    popoverStyle: {},
    targetStyle: { width: 'fit-content' },
    popover: 'in popover',
  },
};

export const Default = (args: TPopover<HTMLButtonElement>) => (
  <Popover
    {...args}
    popover={
      <Typography variant="b1" typographyStyle={{ display: 'block', padding: 14 }}>
        {args.popover}
      </Typography>
    }
  >
    <Button>click me</Button>
  </Popover>
);

export const Controlled = (args: TPopover<HTMLButtonElement>) => (
  <Popover<HTMLButtonElement>
    {...args}
    popover={
      <Typography variant="b1" typographyStyle={{ display: 'block', padding: 14 }}>
        {args.popover}
      </Typography>
    }
  >
    {({ ref, onToggle, isPopoverOpen }) => (
      <div>
        <Button variant={isPopoverOpen ? 'primary' : 'outline'} onClick={onToggle} {...{ ref }}>
          click me
        </Button>
      </div>
    )}
  </Popover>
);
