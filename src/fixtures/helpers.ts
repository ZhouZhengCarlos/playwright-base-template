import { test as base } from '@playwright/test';
import * as reporterHelper from '@helpers/reporterAnnotationHelper';

export const test = base.extend<{ randomHelper: typeof randomHelper, reporterhelper: typeof reporterHelper}>({
    reporterhelper: async ({}, use) => {
        await use(reporterHelper);
    },
});
export { expect } from '@playwright/test';