import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import type { TStyledComponentsProps } from '../../lib';
import { getComponentStyle } from '../../lib';

import { Typography } from './Typography';
import type { TTypography, TTypographyVariant } from './types';

export default {
  component: Typography,
  title: 'ui/Typography',
  argTypes: {
    tag: { control: { type: null } },
    children: { control: 'text' },
  },
  args: {
    variant: 'h4',
    children: 'The innovative path we have chosen has not become a limiting factor.',
  },
};

export const Default = (args: TTypography) => <Typography {...args} />;

export const VariantsLorem = (props: TTypography) => {
  return (
    <>
      <TypographyView {...props} variant="h1" title="Headline 1" />
      <TypographyView {...props} variant="h2" title="Headline 2" />
      <TypographyView {...props} variant="h3" title="Headline 3" />
      <TypographyView {...props} variant="h4" title="Headline 4" />
      <TypographyView {...props} variant="h5" title="Headline 5" />
      <TypographyView {...props} variant="h6" title="Headline 6" />
      <TypographyView {...props} variant="st1" title="Subtitle 1" />
      <TypographyView {...props} variant="st2" title="Subtitle 2" />
      <TypographyView {...props} variant="b1" title="Body 1" />
      <TypographyView {...props} variant="b2" title="Body 2" />
      <TypographyView {...props} variant="caption" title="Caption" />
      <TypographyView {...props} variant="overline" title="Overline" />
    </>
  );
};

const TypographyView: FC<{ variant: TTypographyVariant; title: string }> = ({ title, children, variant }) => {
  const [computedStyle, setComputedStyle] = useState<CSSStyleDeclaration>();
  const typographyRef = useRef<HTMLElement>();

  useEffect(() => {
    const instance = typographyRef.current;

    if (instance) setComputedStyle(getComputedStyle(instance));
  }, []);

  return (
    <StyledTypographyView>
      <Typography
        ref={typographyRef}
        tag="h2"
        variant={variant}
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
        <Typography variant={variant}>{children}</Typography>
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
  background-color: ${({ theme }) => theme.palette.white};
  margin: -1rem;
  padding: 1rem;
`;

const StyledContent = styled.div<{ contentStyle?: TStyledComponentsProps }>`
  display: flex;

  ${({ contentStyle, theme }) => getComponentStyle(contentStyle, { theme })}
`;

VariantsLorem.argTypes = {
  tag: { control: { type: null } },
  variant: { control: { type: null } },
  typographyStyle: { control: { type: null } },
};
