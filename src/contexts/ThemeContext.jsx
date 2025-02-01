import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useSettings } from './SettingsContext';
import { lightTheme, darkTheme } from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';

export const ThemeProvider = ({ children }) => {
  const { settings } = useSettings();
  const theme = settings.theme === 'dark' ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}; 