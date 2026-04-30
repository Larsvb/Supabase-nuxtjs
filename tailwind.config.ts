/** @type {import('tailwindcss').Config} */
const maxWidths = [200, 310, 370, 420, 500, 520, 620, 640, 660, 742, 860, 970, 1080, 1200, 1232, 1300, 1440];
const spacing = [
  5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 18, 20, 25, 30, 40, 50, 55, 60, 65, 70, 80, 90, 95, 110, 120, 150, 300,
];

const colors = {
  pri: '#0C0C0C',
  sec: '#FFFFFF',
  ter: {
    DEFAULT: '#FF5500',
    400: '#FF781D',
    600: '#C63B0F',
    800: '#931C05',
  },
  gray: {
    DEFAULT: '#E3E3E3',
    600: '#969696',
  },
};

const screens = {
  ms: 350,
  mm: 450,
  ml: 550,
  ts: 650,
  tm: 750,
  tl: 850,
  ds: 1024,
  dm: 1280,
  dl: 1400,
} as const;

const screensToPixels = (obj: Record<string, number>) => {
  return Object.entries(obj).reduce<Record<string, string>>((acc, [key, value]) => {
    acc[key] = `${value}px`;
    return acc;
  }, {});
};

const numbersToPixels = (array: number[]) => {
  return array.reduce<Record<string, string>>((acc, number) => {
    acc[number] = `${number}px`;
    return acc;
  }, {});
};

export { colors, screens };

export default {
  content: [
    './app/**/*.{js,ts,vue}',
    './app/**/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
      screens: screensToPixels(screens),
      colors,
      maxWidth: numbersToPixels(maxWidths),
      spacing: { ...numbersToPixels(spacing), inherit: 'inherit' },
    },
  },
  safelist: ['sr-only'],
};
