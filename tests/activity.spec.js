// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.cypress.io/' , {waitUntil: 'domcontentloaded'});

  // Expect the title to contain "Cypress".
  await expect(page).toHaveTitle(/Testing Frameworks for Javascript | Write, Run, Debug | Cypress/);
});

test('products', async ({ page }) => {
  await page.goto('https://www.cypress.io/');

  // Click the products link.
  await page.getByRole('link', { name: 'Products' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Test Modern Apps' })).toBeVisible();
});
