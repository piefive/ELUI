import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { createEluiName } from '../../lib';
import { Typography } from '../Typography';

import type { TPortal } from './types';
import { Portal } from './Portal';

export default {
  title: 'ui/Portal',
  component: Portal,
  args: {
    name: 'test',
  },
};

const useLocation = () => location;

export const Default = (args: TPortal) => {
  const location = useLocation();
  const [isDoc, setIsDoc] = useState(false);

  useEffect(() => {
    setIsDoc(location.search.includes('docs'));

    return () => {
      const unclearPortal = document.getElementById(createEluiName(`portal-${args?.name ?? ''}`));
      if (!location.href.includes('portal') && unclearPortal) unclearPortal.remove();
    };
  }, [args?.name, location]);

  return (
    <StyledBox>
      <Typography tag="h1" variant="h4" typographyStyle={{ display: 'block' }}>
        Portal
      </Typography>
      <Typography variant="caption">
        Portals provide a way to render children into a DOM node that exists outside the hierarchy of the DOM component.
      </Typography>
      {!isDoc && (
        <Portal {...args}>
          <StyledBox style={{ marginTop: 24 }}>
            <Typography>Inspect this element</Typography>
          </StyledBox>
        </Portal>
      )}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  position: relative;
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
