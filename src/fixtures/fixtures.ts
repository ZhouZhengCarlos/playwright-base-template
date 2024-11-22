import { mergeTests } from '@playwright/test';
import { test as helpers } from '@fixtures/helpers';
import { test as flags } from '@fixtures/variables';
import { test as basePage } from '@fixtures/basePage';
import { test as pages } from '@fixtures/pages';
export const test = mergeTests(helpers, flags, basePage, pages);
export { expect } from '@playwright/test';