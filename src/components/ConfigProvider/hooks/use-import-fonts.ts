import { useRef } from 'react';

import { useIsomorphicLayoutEffect } from 'lib';

const DEFAULT_FONT_URL = 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap';

export const useImportFonts = (fontUrl?: string) => {
  const isFontLoad = useRef(false);

  useIsomorphicLayoutEffect(() => {
    const url = fontUrl ?? DEFAULT_FONT_URL;
    const isLoad = isFontLoad.current;
    const findNode = document.head.querySelectorAll(`link[href='${url}']`);

    if (!isLoad && !findNode.length) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      document.head.appendChild(link);
      isFontLoad.current = true;
    }
  }, [fontUrl]);
};
