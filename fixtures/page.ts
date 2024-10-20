import { test as base } from '@playwright/test';
import cookie from '@test-data/cookie.data.json';
export const test = base.extend({
  page: async ({ context, page }, use) => {
    await context.addCookies([{...cookie}]);
    await use(page);
  },
});