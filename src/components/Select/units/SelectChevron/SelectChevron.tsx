import { usePopoverContext } from 'components/Popover';

import { StyledSelectChevron } from './styled';

export const SelectChevron = () => {
  const { isPopoverOpen } = usePopoverContext();

  return <StyledSelectChevron isOpen={isPopoverOpen} />;
};
