type TStringHex = {
  r: string;
  g: string;
  b: string;
  a: string;
};

type TDecimalHex = {
  r: number;
  g: number;
  b: number;
  a: number;
};

const removeHash = (hex: string) => (hex.charAt(0) === '#' ? hex.slice(1) : hex);

const parseHex = (rawHex: string): TStringHex => {
  const isShort = rawHex.length === 3 || rawHex.length === 4;

  const twoDigitHexR = isShort ? `${rawHex.slice(0, 1)}${rawHex.slice(0, 1)}` : rawHex.slice(0, 2);
  const twoDigitHexG = isShort ? `${rawHex.slice(1, 2)}${rawHex.slice(1, 2)}` : rawHex.slice(2, 4);
  const twoDigitHexB = isShort ? `${rawHex.slice(2, 3)}${rawHex.slice(2, 3)}` : rawHex.slice(4, 6);
  const twoDigitHexA = (isShort ? `${rawHex.slice(3, 4)}${rawHex.slice(3, 4)}` : rawHex.slice(6, 8)) || 'ff';

  return {
    r: twoDigitHexR,
    g: twoDigitHexG,
    b: twoDigitHexB,
    a: twoDigitHexA,
  };
};

const hexToDecimal = (hex: string) => parseInt(hex, 16);

const hexesToDecimals = ({ r, g, b, a }: TStringHex): TDecimalHex => ({
  r: hexToDecimal(r),
  g: hexToDecimal(g),
  b: hexToDecimal(b),
  a: +(hexToDecimal(a) / 255).toFixed(2),
});

const formatRgb = ({ r, g, b, a: parsedA }: TDecimalHex, a?: number) => `rgba(${r}, ${g}, ${b}, ${a || parsedA})`;

export const hexToRgba = (hex: string, a?: number) => {
  const rawHex = removeHash(hex);
  const hexObject = parseHex(rawHex);
  const decimalObject = hexesToDecimals(hexObject);

  return formatRgb(decimalObject, a);
};
