import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import type { TStyledComponentsProps } from '../../lib';
import { getComponentStyle } from '../../lib';

import { Typography } from './Typography';
import type { TTypography, TTypographyVariant } from './types';

export default {
  component: Typography,
  title: 'ui/Typography',
  argTypes: {
    tag: { control: 'text' },
  },
  args: {
    tag: 'span',
    variant: 'h1',
  },
};

export const Default = (args: TTypography) => <Typography {...args}>Typography</Typography>;

export const VariantsLorem = () => {
  return (
    <>
      <TypographyView variant="h1" title="Headline 1" />
      <TypographyView variant="h2" title="Headline 2" />
      <TypographyView variant="h3" title="Headline 3" />
      <TypographyView variant="h4" title="Headline 4" />
      <TypographyView variant="h5" title="Headline 5" />
      <TypographyView variant="h6" title="Headline 6" />
      <TypographyView variant="st1" title="Subtitle 1" />
      <TypographyView variant="st2" title="Subtitle 2" />
      <TypographyView variant="b1" title="Body 1" />
      <TypographyView variant="b2" title="Body 2" />
      <TypographyView variant="caption" title="Caption" />
      <TypographyView variant="overline" title="Overline" />
    </>
  );
};

const TypographyView = ({ title, ...rest }: { variant: TTypographyVariant; title: string }) => {
  const [computedStyle, setComputedStyle] = useState<CSSStyleDeclaration>();
  const typographyRef = useRef<HTMLElement>();
  const { variant } = rest;

  useEffect(() => {
    const instance = typographyRef.current;

    if (instance) setComputedStyle(getComputedStyle(instance));
  }, []);

  return (
    <StyledTypographyView>
      <Typography
        ref={typographyRef}
        tag="h2"
        {...rest}
        typographyStyle={({ theme }) => ({
          marginBottom: 24,
          paddingBottom: 24,
          borderBottom: `1px solid ${theme.palette.grey_300}`,
        })}
      >
        {title}
      </Typography>
      <StyledContent>
        <StyledContent contentStyle={{ flexDirection: 'column', marginRight: 64 }}>
          <TypographyContent label="Alias" value={variant} />
          <TypographyContent label="Weight" value={computedStyle?.fontWeight ?? 'computed'} />
          <TypographyContent label="Size" value={computedStyle?.fontSize ?? 'computed'} />
          <TypographyContent label="Line height" value={computedStyle?.lineHeight ?? 'computed'} />
          <TypographyContent label="Letter spacing" value={computedStyle?.letterSpacing ?? 'computed'} />
        </StyledContent>
        <Typography {...rest}>The innovative path we have chosen has not become a limiting factor.</Typography>
      </StyledContent>
    </StyledTypographyView>
  );
};

const TypographyContent = ({ label, value }: { label: string; value: string }) => (
  <StyledContent contentStyle={{ marginBottom: 16 }}>
    <Typography variant="b2" typographyStyle={{ minWidth: 124, marginRight: 24 }}>
      {label}
    </Typography>
    <Typography variant="b2">{value}</Typography>
  </StyledContent>
);

const StyledTypographyView = styled.div`
  margin-bottom: 64px;
`;

const StyledContent = styled.div<{ contentStyle?: TStyledComponentsProps }>`
  display: flex;

  ${({ contentStyle, theme }) => getComponentStyle(contentStyle, { theme })}
`;

VariantsLorem.argTypes = {
  tag: { control: { type: null } },
};
