import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text.primary};
    transition: all 0.3s ease;
  }

  // Font size based on settings
  html {
    font-size: ${props => {
      switch (props.theme.fontSize) {
        case 'small': return '14px';
        case 'large': return '18px';
        default: return '16px';
      }
    }};
  }

  // Add more global styles here
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles; 