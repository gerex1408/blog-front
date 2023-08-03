'use client';

import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { store } from '../store';

export function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={false}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
