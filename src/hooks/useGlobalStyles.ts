import { css, SerializedStyles } from '@emotion/react';
import { generate } from '@ant-design/colors';

type TBaseColors = {
  [paletteName: string]: string | string[];
};

const BASE_COLORS: TBaseColors = {
  blue: '#1890ff',
  cyan: '#13c2c2',
  geekblue: '#2f54eb',
  gold: '#faad14',
  green: '#52c41a',
  magenta: '#eb2f96',
  orange: '#fa8c16',
  purple: '#722ed1',
  red: '#f5222d',
  yellow: '#fadb14',
  gray: [
    '#ffffff',
    '#fafafa',
    '#f5f5f5',
    '#f0f0f0',
    '#d9d9d9',
    '#bfbfbf',
    '#8c8c8c',
    '#595959',
    '#434343',
    '#262626',
    '#1f1f1f',
    '#141414',
    '#000000',
  ],
};

const formatCssVariable = (
  paletteName: string,
  value: string | string[],
  index?: number
): string =>
  `--${paletteName}${index || index === 0 ? `-${index + 1}` : ''}: ${value}`;

const createPaletteVars = (paletteName: string, baseColor: string) => {
  const cssVars: string[] = [];

  const palette = generate(baseColor);

  palette.forEach((color: string, index: number) =>
    cssVars.push(formatCssVariable(paletteName, color, index))
  );

  return cssVars;
};

const useGlobalStyles = (): SerializedStyles => {
  const cssVars: string[] = [];

  for (const paletteKey in BASE_COLORS) {
    const baseColor = BASE_COLORS[paletteKey];

    let paletteVars: string[] = [];

    if (typeof baseColor === 'string') {
      // Generate a new palette based on the color
      paletteVars = createPaletteVars(paletteKey, baseColor);
    } else {
      // baseColor is an array, use those colors as the palette
      paletteVars = baseColor.map((color, index) =>
        formatCssVariable(paletteKey, color, index)
      );
    }

    paletteVars.forEach((value) => cssVars.push(value));
  }

  return css`
    :root {
      --font-family: 'Montserrat';

      --border-radius: 2px;

      ${cssVars.map((cssString) => cssString)}
    }

    body {
      margin: 0;
    }

    * {
      font-family: var(--font-family);
    }
  `;
};

export default useGlobalStyles;
