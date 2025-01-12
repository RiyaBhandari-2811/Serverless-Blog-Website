import { resolve } from "path";

console.log('Webpack alias config:', {
  '@': resolve(__dirname, 'src'),
  '@scss': resolve(__dirname, 'src/scss'),
});

export const webpack = {
  alias: {
    "@": resolve(__dirname, "src"),
    "@scss": resolve(__dirname, "src/scss"),
  },
};
