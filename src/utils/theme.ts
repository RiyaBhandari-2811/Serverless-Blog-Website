import { createTheme } from '@mui/material/styles';

const lightPalette = {
  primary: {
    main: '#FFFFFF', // White
  },
  secondary: {
    main: 'rgba(246, 246, 247, 1)', // Light Grey
  },
  tertiary: {
    main: 'rgba(105, 106, 117, 1)', // Dark Grey
  },
  quaternary: {
    main: 'rgba(75, 107, 251, 0.05)', // Light Blue
  },
  background: {
    default: '#ffffff',
    paper: '#f5f5f5',
  },
  text: {
    primary: 'rgba(59, 60, 74, 1)', // Dark Blue
    secondary: 'rgba(24, 26, 42, 1)', // Dark Blue
    tertiary: 'rgba(75, 107, 251, 1)', // Blue
  },
};

const darkPalette = {
  primary: {
    main: '#121212', // Light Blue
  },
  secondary: {
    main: '#f48fb1', // Pink
  },
  tertiary: {
    main: '#ffb74d', // Light Orange
  },
  quaternary: {
    main: '#81c784', // Light Green
  },
  background: {
    default: '#121212',
    paper: '#424242',
  },
  text: {
    primary: '#ffffff',
    secondary: '#bbbbbb',
  },
};

const lightTheme = createTheme({
  palette: {
    ...lightPalette,
  },
});

const darkTheme = createTheme({
  palette: {
    ...darkPalette,
  },
});

export { lightTheme, darkTheme };
