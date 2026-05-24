export function applyTheme(
  theme
) {

  document.documentElement.style
    .setProperty(
      '--bg',
      theme.background
    );

  document.documentElement.style
    .setProperty(
      '--fg',
      theme.foreground
    );
}