const {test, expect} = require('@playwright/test');
//const {hello,helloWorld} = require('./demo/hello');
//import {hello, helloWorld} from '/demo/hello.js';

//console.log(hello());
//console.log(helloWorld());

/*test ('my first test', async ({page}) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle(/Google/);
})*/

test ('my first test', async ({page}) => {
    await page.goto('https://www.apple.com/');
    await expect(page).toHaveTitle(/Apple/);
})