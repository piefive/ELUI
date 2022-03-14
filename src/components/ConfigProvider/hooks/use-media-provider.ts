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
  isAfterTablet: boolean;
  isAfterLaptop: boolean;
  isBeforeLaptop: boolean;
  isBeforeDesktop: boolean;
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
    `(min-width: ${media.laptop}) and (max-width: ${parseInt(media.desktop) - 1}px)`,
    defaultMedia === 'laptop'
  );

  const ctx = useMemo<TMediaContext>(() => {
    const isDesktop = !isMobile && !isTablet && !isLaptop;

    return {
      isMobile,
      isTablet,
      isLaptop,
      isDesktop,
      isAfterTablet: isTablet || isLaptop || isDesktop,
      isAfterLaptop: isLaptop || isDesktop,
      isBeforeLaptop: isMobile || isTablet,
      isBeforeDesktop: isMobile || isTablet || isLaptop,
    };
  }, [isLaptop, isMobile, isTablet]);

  return createElement(MediaContext.Provider, { value: ctx }, children);
};

export const useMediaContext = () => useContext<TMediaContext>(MediaContext);
