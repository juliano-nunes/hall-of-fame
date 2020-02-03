import React from 'react';
import { ThemeProvider } from 'styled-components';
import hollywood from '../src/styles/themes/hollywood';

export function wrapRootElement({ element }) {
  return <ThemeProvider theme={hollywood}>{element}</ThemeProvider>
};
