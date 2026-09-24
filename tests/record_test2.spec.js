import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('moji');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Shift+CapsLock');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('moji@');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('moji@gmail.com');
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('0771234567');
  await page.getByRole('gridcell', { name: 'Choose Thursday, September 24th,' }).selectOption('2002');
  await page.getByRole('combobox').first().selectOption('7');
  await page.locator('#subjectsInput').fill('Ma');
  await page.locator('#subjectsInput').press('Enter');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Batticalo');
  await page.locator('#react-select-3-input').press('Enter');
});