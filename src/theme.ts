import { createTheme } from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

export const theme = createTheme({
  /** Put your mantine theme override here */
  // TODO: Add your theme overrides here - choose some good font
  // fontFamily: 'serif',
  // primaryColor: 'cyan',
});

// CSS variables object, can be access in *.css.ts files
export const vars = themeToVars(theme);
