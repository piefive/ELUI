import { Button } from './Button';
import type { IButton } from './types';

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    onClick: { control: { type: null } },
    disabled: { control: 'boolean' },
    leftSlot: { control: 'text' },
    rightSlot: { control: 'text' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
    buttonStyle: {},
  },
};

export const Default = (args: IButton) => <Button {...args} />;
