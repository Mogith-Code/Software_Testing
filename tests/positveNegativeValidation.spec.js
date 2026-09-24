// tests/PositiveNegativeValidationTesting.spec.js

// Import necessary modules from Playwright - test and expect
import { test, expect } from '@playwright/test';

// Login page URL 
const loginPage = "https://practicetestautomation.com/practice-test-login/"

// Test Case 1: Positive Login Test
test('Test_Case_1: Positive Login Test', async ({ page }) => {
  
    // 1. Navigate to the login page
    await page.goto(loginPage);

    // 2. Enter username
    await page.getByLabel('Username').fill('student');

    // 3. Enter password
    await page.getByLabel('Password').fill('Password123');

    // 4. Click the submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // 5. Verify URL
    await expect(page).toHaveURL(
        'https://practicetestautomation.com/logged-in-successfully/'
    );

    // 6. Verify success message
    await expect(
        page.getByText(/Congratulations | successfully logged in/i)
    ).toBeVisible();

    // 7. Verify logout button is visible
    await expect(
        page.getByText('Log out')
    ).toBeVisible();
});




// Test Case 2: Negative Username Test
test('Test_Case_2: Negative Username Test', async ({ page }) => {

    // 1. Navigate to the login page
    await page.goto(loginPage);

    // 2. Enter invalid username
    await page.getByLabel('Username').fill('incorrectUser');

    // 3. Enter valid password
    await page.getByLabel('Password').fill('Password123');

    // 4. Click the submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // 5. Verify error message is displayed
    const errorMessage = page.locator('#error');

    await expect(errorMessage).toBeVisible();

    // 6. Verify error message text
    await expect(errorMessage).toHaveText(
        'Your username is invalid!'
    );
});





// Test Case 3: Negative Password Test
test('Test_Case_3: Negative Password Test', async ({ page }) => {

    // 1. Navigate to the login page
    await page.goto(loginPage);

    // 2. Enter valid username
    await page.getByLabel('Username').fill('student');

    // 3. Enter invalid password
    await page.getByLabel('Password').fill('incorrectPassword');

    // 4. Click the submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // 5. Verify error message is displayed
    const errorMessage = page.locator('#error');

    await expect(errorMessage).toBeVisible();

    // 6. Verify error message text
    await expect(errorMessage).toHaveText(
        'Your password is invalid!'
    );
});





// Test Case 4: Validation Testing – Empty Username
test('Test_Case_4: Validation Testing – Empty Username', async ({ page }) => {

    // 1. Navigate to the login page
    await page.goto(loginPage);

    // 2. Leave username field empty
    await page.getByLabel('Username').fill('');

    // 3. Enter valid password
    await page.getByLabel('Password').fill('Password123');

    // 4. Click the submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // 5. Verify error message is displayed
    const errorMessage = page.locator('#error');

    await expect(errorMessage).toBeVisible();

    // 6. Verify error message text
    await expect(errorMessage).toHaveText(
        'Your username is invalid!'
    );
});