import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: null, // use the real window size instead of a fixed 1280x720
        launchOptions: { args: ['--start-maximized'] },
      },
    },
  ],
});
