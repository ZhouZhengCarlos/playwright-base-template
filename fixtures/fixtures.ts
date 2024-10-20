import { mergeTests } from '@playwright/test';
import { test as components } from '@fixtures/components';
import { test as helpers } from '@fixtures/helpers';
import { test as flags } from '@fixtures/flags';
import { test as page } from '@fixtures/page';
export const test = mergeTests(components, helpers, flags, page);
export { expect } from '@playwright/test';