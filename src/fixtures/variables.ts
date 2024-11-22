import { Environment } from '@env';
import { test as base } from '@playwright/test';

type variableFixtures = {
    apiUrl: string;
    isProduction: boolean;
};

export const test = base.extend<variableFixtures>({
    apiUrl: async ({}, use) => {
        await use(Environment.API_URL);
    },
});