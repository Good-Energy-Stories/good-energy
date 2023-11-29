import percySnapshot from '@percy/puppeteer';

describe('Google Homepage', () => {
  it('should display the google homepage', async () => {
    await page.goto('/');
    await percySnapshot(page, 'Homepage');
  });
});
