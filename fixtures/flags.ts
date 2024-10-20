import { test as base } from '@playwright/test';

export const test = base.extend< { isSaleEvent: boolean, isProduction: boolean } >({
    isSaleEvent: async ({}, use) => {
        await use(false);
    },
    isProduction: async ({}, use) => {
        await use(process.env.test_env === 'production');
    }
});