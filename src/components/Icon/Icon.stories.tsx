import { Icon, IconComponent } from './Icon';
import type { TIcon } from './types';

export default {
  title: 'ui/Icon',
  component: IconComponent,
};

export const All = (args: TIcon) => (
  <div>
    <Icon.ChevronUp {...args} />
    <Icon.ChevronRight {...args} />
    <Icon.ChevronDown {...args} />
    <Icon.ChevronLeft {...args} />
  </div>
);
