import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 60000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 2,
  workers: process.env.CI ? 1 : undefined,
  globalSetup: 'globalSetup.ts',
  reporter: [['html', { open: 'never' }]],
  expect: {
    timeout: 30000,
    toHaveScreenshot: { maxDiffPixels: 100 }
  },
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    baseURL: process.env.WEB_URL
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'webkit',
      use: { ...devices['iPhone 14 Pro Max'],
       },
    },
  ],
});
