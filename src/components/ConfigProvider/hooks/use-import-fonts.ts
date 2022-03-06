import { useLayoutEffect, useRef } from 'react';

export const useImportFonts = (fontUrl: string) => {
  const isFontLoad = useRef(false);

  useLayoutEffect(() => {
    const isLoad = isFontLoad.current;
    const findNode = document.head.querySelectorAll(`link[href='${fontUrl}']`);

    if (!isLoad && !findNode.length) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = fontUrl;
      document.head.appendChild(link);
      isFontLoad.current = true;
    }
  }, [fontUrl]);
};
