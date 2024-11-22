import { Environment } from '@env';
import { test as base } from '@playwright/test';

type variableFixtures = {
    baseUrl: string;
    apiUrl: string;
    isProduction: boolean;
};

export const test = base.extend<variableFixtures>({
    baseUrl: async ({}, use) => {
        await use(Environment.WEB_URL);
    },
    apiUrl: async ({}, use) => {
        await use(Environment.API_URL);
    },
});