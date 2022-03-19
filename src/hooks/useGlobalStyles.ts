import { css, SerializedStyles } from '@emotion/react';

type TColors = {
  [paletteName: string]: string[];
};

const COLORS: TColors = {
  blueGray: [
    '#F8FAFC',
    '#F1F5F9',
    '#E2E8F0',
    '#CBD5E1',
    '#94A3B8',
    '#64748B',
    '#475569',
    '#334155',
    '#1E293B',
    '#0F172A',
  ],
  teal: [
    '#F0FDFA',
    '#CCFBF1',
    '#99F6E4',
    '#5EEAD4',
    '#2DD4BF',
    '#14B8A6',
    '#0D9488',
    '#0F766E',
    '#115E59',
    '#134E4A',
  ],
  cyan: [
    '#ECFEFF',
    '#CFFAFE',
    '#A5F3FC',
    '#67E8F9',
    '#22D3EE',
    '#06B6D4',
    '#0891B2',
    '#0E7490',
    '#155E75',
    '#164E63',
  ],
  indigo: [
    '#EEF2FF',
    '#E0E7FF',
    '#C7D2FE',
    '#A5B4FC',
    '#818CF8',
    '#6366F1',
    '#4F46E5',
    '#4338CA',
    '#3730A3',
    '#312E81',
  ],
  red: [
    '#FFF1F2',
    '#FFE4E6',
    '#FECDD3',
    '#FDA4AF',
    '#FB7185',
    '#F43F5E',
    '#E11D48',
    '#BE123C',
    '#9F1239',
    '#881337',
  ],
};

const useGlobalStyles = (): SerializedStyles => {
  const cssVars: string[] = [];

  for (const paletteKey in COLORS) {
    const paletteVars: string[] = COLORS[paletteKey].map((color, index) => {
      return `--${paletteKey}-${index + 1}: ${color}`;
    });

    paletteVars.forEach((value) => cssVars.push(value));
  }

  return css`
    :root {
      --font-family-primary: 'Montserrat';
      --font-family-secondary: 'Lato', sans-serif;

      --border-radius: 32px;

      ${cssVars.map((cssString) => cssString)}
    }

    body {
      margin: 0;
      background: var(--blueGray-1);
    }

    * {
      font-family: var(--font-family-primary);
    }
  `;
};

export default useGlobalStyles;
