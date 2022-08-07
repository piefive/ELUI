import { bindAria, noop, theme } from 'lib';

import { Box } from './Box';
import type { IBox } from './types';

export default {
  title: 'ui/Box',
  component: Box,
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Box',
    boxStyle: {},
  },
};

export const Default = (args: IBox) => <Box {...args} />;

export const Example = () => {
  return (
    <Box
      tag="ul"
      {...bindAria({ sort: 'other' })}
      boxStyle={{ flexDirection: 'column', gap: 12 }}
      childBoxStyle={{ padding: 12, borderStyle: 'solid' }}
    >
      {Object.entries(theme.palette).map(([name, color]) => (
        <Box
          tag="li"
          onClick={noop}
          {...bindAria({ details: `color name: ${name}`, valuetext: color.toString() })}
          boxStyle={{ borderColor: color }}
        >
          box with color: {color}
        </Box>
      ))}
    </Box>
  );
};
