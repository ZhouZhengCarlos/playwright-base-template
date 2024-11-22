import { mergeTests } from '@playwright/test';
import { test as components } from '@fixtures/components';
import { test as helpers } from '@fixtures/helpers';
import { test as flags } from '@fixtures/variables';
import { test as basePage } from '@fixtures/basePage';
export const test = mergeTests(components, helpers, flags, basePage);
export { expect } from '@playwright/test';