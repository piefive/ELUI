import styled, { css } from 'styled-components';

import { Typography } from '../Typography';

import { Icon, IconComponent } from './Icon';
import type { TIcon } from './types';
import * as Icons from './units';

export default {
  title: 'ui/Icon',
  component: IconComponent,
  args: {
    size: 40,
  },
};

const names = Object.entries(Icons).map(([key]) => key);

export const All = (args: TIcon) => (
  <StyledIcons>
    {names.map(name => {
      const ComponentIcon = Icon[name as 'Info'];
      const component = `<Icon.${name} />`;

      return (
        <StyledIconBox key={name}>
          <Typography
            variant="h6"
            typographyStyle={({ theme }) => ({
              width: '100%',
              marginBottom: 14,
              padding: 14,
              textAlign: 'center',
              borderBottom: `1px solid ${theme.palette.grey_300}`,
            })}
          >
            {name}
          </Typography>
          <ComponentIcon {...args} />
          <Typography
            variant="caption"
            onClick={() => navigator.clipboard.writeText(component).catch()}
            typographyStyle={({ theme }) =>
              css`
                width: 100%;
                margin-top: 14px;
                padding: 14px;
                text-align: center;
                border-top: 1px solid ${theme.palette.grey_300};

                &:hover {
                  cursor: pointer;
                  background: ${theme.palette.grey_100};
                }
              `
            }
          >
            {component}
          </Typography>
        </StyledIconBox>
      );
    })}
  </StyledIcons>
);

export const Custom = (args: TIcon) => {
  return (
    <StyledIcons>
      <StyledIconBox>
        <Typography variant="h6" typographyStyle={{ padding: 14 }}>
          Custom Icon
        </Typography>
        <Icon {...args}>
          <path d="M143.5,382.399c-5.7,0-9.6,3.801-9.6,9.602V430.2c0,5.699,3.8,9.6,9.6,9.6c5.8,0,9.6-3.799,9.6-9.6v-38.199    C153.1,386.3,149.2,382.399,143.5,382.399z" />
          <path d="M200.9,420.7c-5.7,0-9.6,3.801-9.6,9.6v38.201c0,5.699,3.8,9.6,9.6,9.6c5.8,0,9.6-3.801,9.6-9.6V430.3    C210.5,424.501,206.6,420.7,200.9,420.7z" />
          <path d="M258.3,382.399c-5.699,0-9.6,3.801-9.6,9.602V430.2c0,5.699,3.8,9.6,9.6,9.6c5.801,0,9.601-3.799,9.601-9.6v-38.199    C267.8,386.3,264,382.399,258.3,382.399z" />
          <path d="M459.101,179.7c0-57.4-47.801-103.3-105.2-103.3c-21,0-38.2,5.7-55.5,15.3c-24.9-32.5-63.1-53.5-107.1-53.5    c-74.6,0-133.9,59.3-133.9,133.9c0,1.9,0,5.7,0,7.6C23,195,0,227.5,0,267.7c0,53.5,42.1,95.6,95.6,95.6h325.1    c53.5,0,95.6-42.1,95.6-95.6C516.5,227.5,493.5,195,459.101,179.7z M420.8,344.2H95.7c-42.1,0-76.5-34.4-76.5-76.5    c0-36.3,24.9-66.9,59.3-74.6c-1.9-7.7-1.9-13.4-1.9-21c0-63.1,51.6-114.8,114.8-114.8c44,0,84.1,24.9,103.3,63.1    C310,105.1,331,95.5,354,95.5c47.8,0,86.101,38.2,86.101,86.1c0,3.8,0,7.6,0,11.5c32.5,7.6,57.399,38.2,57.399,74.6    C497.3,309.8,462.9,344.2,420.8,344.2z" />
          <path d="M373,382.399c-5.7,0-9.6,3.801-9.6,9.602V430.2c0,5.699,3.8,9.6,9.6,9.6s9.601-3.799,9.601-9.6v-38.199    C382.601,386.3,378.7,382.399,373,382.399z" />
          <path d="M315.601,420.7c-5.7,0-9.601,3.801-9.601,9.6v38.201c0,5.699,3.8,9.6,9.601,9.6c5.8,0,9.6-3.801,9.6-9.6V430.3    C325.2,424.501,321.4,420.7,315.601,420.7z" />
        </Icon>
        <Typography variant="caption" typographyStyle={{ padding: 14 }}>
          Just copy svg path's, it's example from{' '}
          <a href="https://icon-icons.com" target="_blank">
            https://icon-icons.com
          </a>
        </Typography>
      </StyledIconBox>
    </StyledIcons>
  );
};
Custom.args = { iconStyle: { fill: 'black' }, viewBox: '0 0 516.301 516.301' };

const StyledIcons = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 24px;
  max-width: ${({ theme }) => theme.media.laptop};
`;

const StyledIconBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-width: 200px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
