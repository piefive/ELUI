import { ReactNode, createContext, createElement, useContext, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { useMedia } from 'lib';

import type { TMedia } from '../types';

type TMediaProvider = {
  defaultMedia: TMedia;
  children: ReactNode;
};

type TMediaContext = {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
};

const MediaContext = createContext<TMediaContext>(null);

export const MediaProvider = ({ children, defaultMedia }: TMediaProvider) => {
  const { media } = useTheme();

  const isMobile = useMedia(`(max-width: ${parseInt(media.tablet) - 1}px)`, defaultMedia === 'mobile');

  const isTablet = useMedia(
    `(min-width: ${media.tablet}) and (max-width: ${parseInt(media.laptop) - 1}px)`,
    defaultMedia === 'tablet'
  );

  const isLaptop = useMedia(
    `(min-width: ${media.laptop}) and max-width: ${parseInt(media.desktop) - 1}px)`,
    defaultMedia === 'laptop'
  );

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

export const useMediaContext = () => useContext<TMediaContext>(MediaContext);
