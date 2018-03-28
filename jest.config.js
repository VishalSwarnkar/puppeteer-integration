// const env = process.env.ENV;
// const sqsc_url = env === 'dev' ? 'squarescale.local' : `squarescale.${env}`;

module.exports = {
   // available in all tests
    globalSetup: './setup.js',
    globalTeardown: './teardown.js',
    testEnvironment: './puppeteer_environment.js',
    globals: { // available in all tests
    browser: null,
    page: null
    }
  }
