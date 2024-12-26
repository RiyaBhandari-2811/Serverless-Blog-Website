import { createTheme } from '@mui/material/styles';

const lightPalette = {
  primary: {
    main: '#1976d2', // Blue
  },
  secondary: {
    main: '#9c27b0', // Purple
  },
  tertiary: {
    main: '#ff9800', // Orange
  },
  quaternary: {
    main: '#4caf50', // Green
  },
  background: {
    default: '#ffffff',
    paper: '#f5f5f5',
  },
  text: {
    primary: '#000000',
    secondary: '#757575',
  },
};

const darkPalette = {
  primary: {
    main: '#90caf9', // Light Blue
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
