import { FC, ReactNode, createContext, createElement, useContext, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { useMedia } from 'lib';

export type TMediaContext = {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
};

export const INITIAL_MEDIA_CONTEXT: TMediaContext = {
  isDesktop: true,
  isTablet: false,
  isLaptop: false,
  isMobile: false,
};

const MediaContext = createContext<TMediaContext>(INITIAL_MEDIA_CONTEXT);

export const useMediaContext = () => useContext<TMediaContext>(MediaContext);

export const MediaProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { media } = useTheme();
  const isLaptop = useMedia(`(min-width: ${media.laptop}) and max-width: ${parseInt(media.desktop) - 1}px)`);
  const isTablet = useMedia(`(min-width: ${media.tablet}) and (max-width: ${parseInt(media.laptop) - 1}px)`);
  const isMobile = useMedia(`(max-width: ${parseInt(media.tablet) - 1}px)`);

  const context = useMemo<TMediaContext>(
    () => ({
      isDesktop: !isMobile && !isTablet && !isLaptop,
      isMobile,
      isTablet,
      isLaptop,
    }),
    [isLaptop, isMobile, isTablet]
  );

  return createElement(MediaContext.Provider, { value: context }, children);
};
