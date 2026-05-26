test(
  'opens command palette',
  async ({ page }) => {

    await page.goto('/');

    await page.keyboard.press(
      'Control+Shift+P'
    );

    await expect(
      page.locator('.palette')
    ).toBeVisible();
  }
);