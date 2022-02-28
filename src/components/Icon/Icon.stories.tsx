import { Icon, IconComponent } from './Icon';
import type { TIcon } from './types';

export default {
  title: 'ui/Icon',
  component: IconComponent,
  args: {
    size: 40,
  },
};

export const All = (args: TIcon) => (
  <div>
    <Icon.ChevronUp {...args} />
    <Icon.ChevronRight {...args} />
    <Icon.ChevronDown {...args} />
    <Icon.ChevronLeft {...args} />
    <Icon.AlertCircle {...args} />
    <Icon.Cross {...args} />
    <Icon.Info {...args} />
    <Icon.Mail {...args} />
    <Icon.Resize {...args} />
    <Icon.Search {...args} />
    <Icon.Check {...args} />
    <Icon.Minus {...args} />
    <Icon.ArrowLeft {...args} />
    <Icon.Copy {...args} />
    <Icon.Clipboard {...args} />
    <Icon.Download {...args} />
    <Icon.UploadCloud {...args} />
    <Icon.Grid {...args} />
  </div>
);
