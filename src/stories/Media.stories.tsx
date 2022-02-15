import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { theme } from 'lib';
import { Typography } from 'components';

export const Media = () => {
  const [scrollLeft, setScrollLeft] = useState(0);

  const { media } = theme;

  useEffect(() => {
    const onScroll = () => {
      setScrollLeft(document.scrollingElement.scrollLeft);
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      {Object.keys(media).map(key => {
        const width = media[key];

        return (
          <StyledMedia key={width} style={{ width }}>
            <StyledContent style={{ transform: `translateX(${scrollLeft}px)` }}>
              <Typography variant="st1">
                {key} {width}
              </Typography>
            </StyledContent>
          </StyledMedia>
        );
      })}
    </>
  );
};

Media.parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  options: { showPanel: false },
};

const StyledMedia = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100px;
  margin-bottom: 24px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;

const StyledContent = styled.div`
  position: absolute;
  left: 24px;
  will-change: transform;
`;

export default {
  title: 'Introduction/Media',
  component: Media,
};
