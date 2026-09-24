// Import the necessary modules from Playwright - test and expect
import { test, expect } from '@playwright/test';

// URL of the form page to be tested
const url = 'https://playground.qajourney.net/form/';

// Test Case: Boundary Value Testing for Age Input field
test('Boundary Value Testing - Age Validation', async ({ page }) => {

    // 1. Open the page
    await page.goto(url);

    // 2. Enter age below the minimum boundary
    const ageInput = page.getByTestId('age-input');
    await ageInput.fill('17');

    // 3. Verify the validation message
    await expect(ageInput).toHaveJSProperty(
        'validationMessage',
        'Value must be greater than or equal to 18.'
    );

    // 4. Enter the minimum valid boundary
    await ageInput.fill('18');

    // 5. Verify that the minimum boundary is valid
    await expect(ageInput).toHaveJSProperty(
        'validity.rangeUnderflow',
        false
    );

    // 6. Enter the maximum valid boundary
    await ageInput.fill('99');

    // 7. Verify that the maximum boundary is valid
    await expect(ageInput).toHaveJSProperty(
        'validity.rangeOverflow',
        false
    );

    // 8. Enter age above the maximum boundary
    await ageInput.fill('100');

    // 9. Verify the validation message
    await expect(ageInput).toHaveJSProperty(
        'validationMessage',
        'Value must be less than or equal to 99.'
    );
});