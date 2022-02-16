import { createException } from './create-exception';

type TPaintWorklet = {
  addModule: (urlJS: string) => Promise<void>;
};

type TGlobalCSS = typeof CSS;

interface IGlobalCSS extends TGlobalCSS {
  paintWorklet: TPaintWorklet;
}

export const registerPaintWorklet = async (url: string) => {
  if (CSS && 'paintWorklet' in CSS) {
    try {
      await (CSS as IGlobalCSS).paintWorklet.addModule(url);
      // eslint-disable-next-line no-console
      console.log(`ELUI: paint worklet ${url} were loaded`);
    } catch {
      createException(`paint worklet ${url} not were loaded`, { withName: true, variant: 'console' });
    }
  }
};
