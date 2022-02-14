import { useState } from 'react';

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

export const Default = (args: TTypography) => (
  <Typography {...args}>Typography</Typography>
);

export const VariantsLorem = () => {
  const ruText = 'Съешь же ещё этих мягких французских булок да выпей чаю.';
  const enText = 'All questions asked by five watch experts amazed the judge';

  const [text, setText] = useState(ruText);

  const typographyStyle = { display: 'block', marginBottom: 24 };

  return (
    <>
      <div
        style={{
          position: 'sticky',
          top: 0,
          padding: 10,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="subtitle_bold">Язык текста</Typography>
        <button
          onClick={() => setText(ruText)}
          style={{ margin: '0 10px 0 10px' }}
        >
          ru
        </button>
        <button onClick={() => setText(enText)}>en</button>
      </div>
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as TTypographyVariant[]).map(
        variant => (
          <Typography
            key={variant}
            tag={variant as 'h1'}
            variant={variant}
            typographyStyle={typographyStyle}
          >
            {text}
          </Typography>
        )
      )}
      {(
        [
          'subtitle_bold',
          'subtitle',
          'body_bold',
          'body_normal',
          'body_low',
          'caption',
          'overline',
        ] as TTypographyVariant[]
      ).map(variant => (
        <Typography
          key={variant}
          tag="p"
          variant={variant}
          typographyStyle={typographyStyle}
        >
          {text}
        </Typography>
      ))}
    </>
  );
};

VariantsLorem.argTypes = {
  tag: { control: { type: null } },
};
