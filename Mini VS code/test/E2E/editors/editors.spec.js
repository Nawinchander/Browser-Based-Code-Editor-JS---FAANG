import {
  test,
  expect
}
from '@playwright/test';

test(
  'user can type',
  async ({ page }) => {

    await page.goto(
      'http://localhost:5173'
    );

    await page.fill(
      '#editor',
      'console.log("hello")'
    );

    const value =
      await page.inputValue(
        '#editor'
      );

    expect(value)
      .toContain('hello');
  }
);

