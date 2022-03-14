import { forwardRef } from 'react';

import { combineClassNames, isString } from 'lib';
import { Button } from 'components/Button';
import { Typography } from 'components/Typography';

import type { TEmpty } from './types';
import { EMPTY_CN } from './constants';
import { StyledButtons, StyledEmpty, StyledIllustration } from './styled';

export const Empty = forwardRef<HTMLDivElement, TEmpty>(
  (
    { className, title, description, image, placement = 'center', primaryBtn, secondaryBtn, boxStyle, imageStyle },
    emptyRef
  ) => {
    return (
      <StyledEmpty ref={emptyRef} className={combineClassNames(className, EMPTY_CN)} {...{ placement, boxStyle }}>
        {isString(image) && image.length ? (
          <StyledIllustration src={image} alt="empty_image" {...{ imageStyle }} />
        ) : (
          image
        )}
        <Typography tag="h6" variant="h6">
          {title}
        </Typography>
        {description && (
          <Typography variant="b1" color="grey_700" typographyStyle={{ marginTop: 16 }}>
            {description}
          </Typography>
        )}
        {Boolean(primaryBtn || secondaryBtn) && (
          <StyledButtons>
            {Boolean(primaryBtn && primaryBtn?.children) && <Button variant="primary" {...primaryBtn} />}
            {Boolean(secondaryBtn && secondaryBtn?.children) && <Button variant="white" {...secondaryBtn} />}
          </StyledButtons>
        )}
      </StyledEmpty>
    );
  }
);

Empty.displayName = 'Empty';
