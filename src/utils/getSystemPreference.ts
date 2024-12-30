export const getSystemPreference = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;
