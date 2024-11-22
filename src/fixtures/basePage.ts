import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ context, page }, use) => {
    //Add page settings such as cookies or headers
    // e.g await context.addCookies([{some cookie}]); reference: https://playwright.dev/docs/api/class-browsercontext#browser-context-add-cookies
    await use(page);
  },
});