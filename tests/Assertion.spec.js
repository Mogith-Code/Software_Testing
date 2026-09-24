//Import the necessary modules from Playwright - test and expect
import test, { page, expect } from '@playwright/test';

//Define a test case named 'Asssertions Demo'
test('Assertions Demo', async ({ page }) => {
   //Navigate to the specifid URL
  await page.goto('https://kitchen.applitools.com/');

  // Pause the test execution, So can you inspect the page and its elements in the browser
  await page.pause();
  
//##ASSERTIONS##

//Check whether the element is present or not
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);

/*
//check whether the element is visible or hidden
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden(); 

//Check whether the element is enabled or disabled
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();


//check The text of the element
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen');
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen');

await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', 'chakra-heading css-dpmy2a');
await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveClass(/chakra-heading/);


//Check the URL of the page
await expect(page).toHaveURL('https://kitchen.applitools.com/');
await expect(page).toHaveTitle('The Kitchen');
*/

//Validate the screenshot of the page
await expect(page).toHaveScreenshot('screenshot.png');

});
