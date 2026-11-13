
import { test, expect } from '@playwright/test';

test('Validar título da página inicial', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});


test('Validar botão Get started visível', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toBeVisible();
});
