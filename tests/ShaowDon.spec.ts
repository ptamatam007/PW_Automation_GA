import {test,expect} from '@playwright/test';

test("Shadow dom test", async ({page})=>{

    await page.goto("https://selectorshub.com/xpath-practice-page/");
    
    await page.waitForTimeout(3000);
    const show = await page.locator("#userName");

    await show.locator("#kils").fill("pradeep");

    await page.waitForTimeout(4000);

    await page.close();
})